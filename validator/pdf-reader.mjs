// Minimal PDF reader for the bimpdf validator: no dependencies, Node >= 20.
// It does not follow xref tables. It scans the file for `N G obj` (a later definition of the same
// number wins, so incremental updates work), expands object streams, and reads the last trailer / XRef
// stream for /Root. That is enough to read a .bim.pdf's catalog, name trees, XMP, page tree and the
// embedded files; it is not a general PDF library (no encryption, no stream filters beyond Flate).
import { inflateSync } from 'node:zlib'

export class Name {
  constructor(name) {
    this.name = name
  }
}
export class Ref {
  constructor(num, gen) {
    this.num = num
    this.gen = gen
  }
}
export class PdfString {
  constructor(bytes) {
    this.bytes = bytes
  }
  get text() {
    const b = this.bytes
    if (b.length >= 2 && b[0] === 0xfe && b[1] === 0xff) {
      let s = ''
      for (let i = 2; i + 1 < b.length; i += 2) s += String.fromCharCode((b[i] << 8) | b[i + 1])
      return s
    }
    if (b.length >= 3 && b[0] === 0xef && b[1] === 0xbb && b[2] === 0xbf)
      return Buffer.from(b.subarray(3)).toString('utf8')
    return Buffer.from(b).toString('latin1')
  }
}
export class Stream {
  constructor(dict, raw) {
    this.dict = dict
    this.raw = raw
  }
}

const WS = new Set([0, 9, 10, 12, 13, 32])
const DELIM = new Set([0x28, 0x29, 0x3c, 0x3e, 0x5b, 0x5d, 0x7b, 0x7d, 0x2f, 0x25])
const isRegular = (c) => !WS.has(c) && !DELIM.has(c)

class Parser {
  constructor(buf, pos = 0) {
    this.b = buf
    this.pos = pos
  }
  skipWs() {
    const b = this.b
    for (;;) {
      const c = b[this.pos]
      if (c === 0x25) {
        while (this.pos < b.length && b[this.pos] !== 10 && b[this.pos] !== 13) this.pos++
      } else if (WS.has(c)) this.pos++
      else return
    }
  }
  token() {
    let s = this.pos
    while (this.pos < this.b.length && isRegular(this.b[this.pos])) this.pos++
    return this.b.toString('latin1', s, this.pos)
  }
  value() {
    this.skipWs()
    const b = this.b
    const c = b[this.pos]
    if (c === undefined) throw new Error('unexpected end of data')
    if (c === 0x3c && b[this.pos + 1] === 0x3c) {
      this.pos += 2
      const d = new Map()
      for (;;) {
        this.skipWs()
        if (b[this.pos] === 0x3e && b[this.pos + 1] === 0x3e) {
          this.pos += 2
          return d
        }
        const k = this.value()
        if (!(k instanceof Name)) throw new Error('dictionary key is not a name')
        d.set(k.name, this.value())
      }
    }
    if (c === 0x3c) {
      const end = b.indexOf(0x3e, this.pos)
      let hex = b.toString('latin1', this.pos + 1, end).replace(/[^0-9a-fA-F]/g, '')
      if (hex.length % 2) hex += '0'
      this.pos = end + 1
      return new PdfString(Buffer.from(hex, 'hex'))
    }
    if (c === 0x5b) {
      this.pos++
      const a = []
      for (;;) {
        this.skipWs()
        if (b[this.pos] === 0x5d) {
          this.pos++
          return a
        }
        a.push(this.value())
      }
    }
    if (c === 0x28) return this.literalString()
    if (c === 0x2f) {
      this.pos++
      return new Name(
        this.token().replace(/#([0-9a-fA-F]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16))),
      )
    }
    const t = this.token()
    if (t === '') throw new Error(`unexpected byte 0x${c.toString(16)} at ${this.pos}`)
    if (/^[+-]?(\d+\.?\d*|\.\d+)$/.test(t)) {
      if (/^\d+$/.test(t)) {
        const m = /^\s+(\d+)\s+R(?![A-Za-z0-9])/.exec(
          this.b.toString('latin1', this.pos, this.pos + 24),
        )
        if (m) {
          this.pos += m[0].length
          return new Ref(Number(t), Number(m[1]))
        }
      }
      return Number(t)
    }
    if (t === 'true') return true
    if (t === 'false') return false
    if (t === 'null') return null
    return { keyword: t }
  }
  literalString() {
    const b = this.b
    this.pos++
    const out = []
    let depth = 1
    while (this.pos < b.length) {
      let c = b[this.pos++]
      if (c === 0x5c) {
        c = b[this.pos++]
        if (c === 0x6e) out.push(10)
        else if (c === 0x72) out.push(13)
        else if (c === 0x74) out.push(9)
        else if (c === 0x62) out.push(8)
        else if (c === 0x66) out.push(12)
        else if (c >= 0x30 && c <= 0x37) {
          let v = c - 0x30
          for (let i = 0; i < 2 && b[this.pos] >= 0x30 && b[this.pos] <= 0x37; i++)
            v = v * 8 + (b[this.pos++] - 0x30)
          out.push(v & 255)
        } else if (c === 13) {
          if (b[this.pos] === 10) this.pos++
        } else if (c !== 10) out.push(c)
      } else if (c === 0x28) {
        depth++
        out.push(c)
      } else if (c === 0x29) {
        if (--depth === 0) return new PdfString(Buffer.from(out))
        out.push(c)
      } else out.push(c)
    }
    throw new Error('unterminated string')
  }
}

export class PdfFile {
  /** @param {Buffer} buf */
  constructor(buf) {
    this.buf = buf
    this.header = /^%PDF-(\d)\.(\d)/.exec(buf.toString('latin1', 0, 1024))
    this.version = this.header ? `${this.header[1]}.${this.header[2]}` : null
    this.objects = new Map()
    this.trailers = []
    this.warnings = []
    this.#scan()
    this.#expandObjectStreams()
    const withRoot = [...this.trailers].reverse().find((t) => t.has('Root'))
    this.trailer = withRoot ?? new Map()
    this.encrypted = this.trailers.some((t) => t.has('Encrypt'))
  }

  #scan() {
    const b = this.buf
    const s = b.toString('latin1')
    const re = /(?:^|[\s>\]])(\d+)\s+(\d+)\s+obj\b/g
    let m
    while ((m = re.exec(s))) {
      const num = Number(m[1])
      const p = new Parser(b, m.index + m[0].length)
      let v
      try {
        v = p.value()
      } catch (e) {
        this.warnings.push(`object ${num}: ${e.message}`)
        continue
      }
      p.skipWs()
      if (v instanceof Map && s.startsWith('stream', p.pos)) {
        let st = p.pos + 6
        if (b[st] === 13) st++
        if (b[st] === 10) st++
        const len = v.get('Length')
        let end = -1
        if (typeof len === 'number' && /^\s*endstream/.test(s.slice(st + len, st + len + 12)))
          end = st + len
        if (end < 0) {
          end = s.indexOf('endstream', st)
          if (end < 0) {
            this.warnings.push(`object ${num}: no endstream`)
            continue
          }
          if (b[end - 1] === 10) end--
          if (b[end - 1] === 13) end--
        }
        this.objects.set(num, new Stream(v, b.subarray(st, end)))
        re.lastIndex = end
        if (v.get('Type') instanceof Name && v.get('Type').name === 'XRef') this.trailers.push(v)
      } else {
        this.objects.set(num, v)
        re.lastIndex = p.pos
      }
    }
    const tre = /\btrailer\b/g
    while ((m = tre.exec(s))) {
      try {
        const t = new Parser(b, m.index + 7).value()
        if (t instanceof Map) this.trailers.push(t)
      } catch {
        /* a damaged trailer is simply not used */
      }
    }
  }

  #expandObjectStreams() {
    for (const [num, o] of [...this.objects]) {
      if (
        !(o instanceof Stream) ||
        !(o.dict.get('Type') instanceof Name) ||
        o.dict.get('Type').name !== 'ObjStm'
      )
        continue
      try {
        const data = this.streamData(o)
        const n = this.resolve(o.dict.get('N'))
        const first = this.resolve(o.dict.get('First'))
        const head = new Parser(data, 0)
        const pairs = []
        for (let i = 0; i < n; i++) pairs.push([head.value(), head.value()])
        for (const [onum, off] of pairs) {
          if (this.objects.has(onum)) continue
          this.objects.set(onum, new Parser(data, first + off).value())
        }
      } catch (e) {
        this.warnings.push(`object stream ${num}: ${e.message}`)
      }
    }
  }

  resolve(v, depth = 0) {
    while (v instanceof Ref && depth++ < 32) v = this.objects.get(v.num) ?? null
    return v
  }
  /** Dictionary behind a value (a stream's dictionary counts), or null. */
  dict(v) {
    v = this.resolve(v)
    if (v instanceof Stream) return v.dict
    return v instanceof Map ? v : null
  }
  array(v) {
    v = this.resolve(v)
    return Array.isArray(v) ? v : null
  }
  nameOf(v) {
    v = this.resolve(v)
    return v instanceof Name ? v.name : null
  }
  get(d, key) {
    return d ? this.resolve(d.get(key)) : null
  }
  get catalog() {
    const root = this.dict(this.trailer.get('Root'))
    if (root) return root
    for (const o of this.objects.values())
      if (o instanceof Map && this.nameOf(o.get('Type')) === 'Catalog') return o
    return null
  }

  streamData(stream) {
    const s = this.resolve(stream)
    if (!(s instanceof Stream)) throw new Error('not a stream')
    const f = this.resolve(s.dict.get('Filter'))
    const filters = (Array.isArray(f) ? f : f ? [f] : []).map((x) => this.nameOf(x))
    let data = s.raw
    for (const name of filters) {
      if (name === 'FlateDecode' || name === 'Fl') data = inflateSync(data)
      else throw new Error(`unsupported stream filter /${name}`)
    }
    return data
  }

  /** Walk a name tree (flat /Names and /Kids): [{name, value}] with values unresolved. */
  nameTree(node, seen = new Set()) {
    const d = this.dict(node)
    if (!d || seen.has(d)) return []
    seen.add(d)
    const out = []
    const names = this.array(d.get('Names'))
    if (names)
      for (let i = 0; i + 1 < names.length; i += 2)
        out.push({
          name: this.resolve(names[i])?.text ?? String(this.resolve(names[i])),
          value: names[i + 1],
        })
    const kids = this.array(d.get('Kids'))
    if (kids) for (const k of kids) out.push(...this.nameTree(k, seen))
    return out
  }

  /** Page dictionaries in order (page tree walk). */
  pages() {
    const out = []
    const seen = new Set()
    const walk = (node) => {
      const d = this.dict(node)
      if (!d || seen.has(d)) return
      seen.add(d)
      const kids = this.array(d.get('Kids'))
      if (kids && this.nameOf(d.get('Type')) !== 'Page') kids.forEach(walk)
      else out.push(d)
    }
    walk(this.catalog?.get('Pages'))
    return out
  }
}
