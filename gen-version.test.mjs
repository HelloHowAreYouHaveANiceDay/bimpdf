import test from 'node:test'
import assert from 'node:assert/strict'
import { cpSync, existsSync, mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const appPath = fileURLToPath(new URL('.', import.meta.url))
const versionPath = join(appPath, 'version.json')
const schemaPath = join(appPath, 'schema')
const coreSchemaPath = join(appPath, 'vendor/core/src/schema')
const kitPath = join(appPath, 'kit')
// pinned to Broadsheet 1.0.0 (design/vendor/broadsheet/1.0.0, from ui.bimisland.com/kit/1.0.0/)
const kitSourcePath = join(appPath, 'design/vendor/broadsheet/1.0.0')

test('gen-version writes version.json, copies every core schema and the UI kit', () => {
  const backupRoot = mkdtempSync(join(tmpdir(), 'bimpdf-site-gen-version-'))
  const versionBackupPath = join(backupRoot, 'version.json')
  const schemaBackupPath = join(backupRoot, 'schema')
  const kitBackupPath = join(backupRoot, 'kit')
  const hadVersion = existsSync(versionPath)
  const hadSchema = existsSync(schemaPath)
  const hadKit = existsSync(kitPath)

  if (hadVersion) {
    cpSync(versionPath, versionBackupPath)
  }

  if (hadSchema) {
    cpSync(schemaPath, schemaBackupPath, { recursive: true })
  }

  if (hadKit) {
    cpSync(kitPath, kitBackupPath, { recursive: true })
  }

  try {
    rmSync(versionPath, { force: true })
    rmSync(schemaPath, { force: true, recursive: true })
    rmSync(kitPath, { force: true, recursive: true })

    const result = spawnSync(process.execPath, ['gen-version.mjs'], {
      cwd: appPath,
      encoding: 'utf8',
    })

    assert.equal(result.status, 0, result.error?.message || result.stderr || result.stdout)

    const version = JSON.parse(readFileSync(versionPath, 'utf8'))
    assert.equal(typeof version.version, 'string')
    assert.notEqual(version.version.length, 0)
    assert.equal(typeof version.commit, 'string')
    assert.match(version.commit, /^[0-9a-f]{40}$|^unknown$/)
    assert.equal(Number.isNaN(Date.parse(version.built)), false)

    const expectedSchemas = readdirSync(coreSchemaPath)
      .filter((file) => file.endsWith('.schema.json'))
      .sort()
    const actualSchemas = readdirSync(schemaPath)
      .filter((file) => file.endsWith('.schema.json'))
      .sort()

    assert.deepEqual(actualSchemas, expectedSchemas)
    // R6-4: the v8 contract + vectors are not published any more
    assert.equal(existsSync(join(schemaPath, 'review-contract.json')), false)
    assert.equal(existsSync(join(schemaPath, 'review-vectors.json')), false)
    assert.equal(
      readFileSync(join(schemaPath, 'review-core-contract.json'), 'utf8'),
      readFileSync(join(appPath, 'vendor/core/src/markups/review-core-contract.json'), 'utf8'),
    )
    assert.equal(
      readFileSync(join(schemaPath, 'review-request-contract.json'), 'utf8'),
      readFileSync(join(appPath, 'vendor/core/src/markups/review-request-contract.json'), 'utf8'),
    )
    assert.equal(
      readFileSync(join(schemaPath, 'review-core-vectors.json'), 'utf8'),
      readFileSync(join(appPath, 'vendor/core/conformance/review-core/vectors.json'), 'utf8'),
    )
    // the pages link /kit/tokens.css + /kit/base.css: byte-identical copies of the pinned vendored kit
    for (const f of ['tokens.css', 'base.css']) {
      assert.deepEqual(
        readFileSync(join(kitPath, f)),
        readFileSync(join(kitSourcePath, f)),
        `kit/${f}`,
      )
    }
  } finally {
    rmSync(versionPath, { force: true })
    rmSync(schemaPath, { force: true, recursive: true })
    rmSync(kitPath, { force: true, recursive: true })

    if (hadVersion) {
      cpSync(versionBackupPath, versionPath)
    }

    if (hadSchema) {
      cpSync(schemaBackupPath, schemaPath, { recursive: true })
    }

    if (hadKit) {
      cpSync(kitBackupPath, kitPath, { recursive: true })
    }

    rmSync(backupRoot, { force: true, recursive: true })
  }
})
