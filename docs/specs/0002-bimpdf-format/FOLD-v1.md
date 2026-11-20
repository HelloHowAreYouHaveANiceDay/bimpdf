# FOLD-v1 -- SPEC-DRAFT v1 -> v2

| Finding                              | Verdict           | How                                                                                             |
| ------------------------------------ | ----------------- | ----------------------------------------------------------------------------------------------- |
| P1 ExtensionLevel vs versioning      | adopted           | ExtensionLevel 1; minor only in XMP (with S4)                                                   |
| P2 addin header 1.6                  | adopted           | 1.1 requires >= 1.7; AC15                                                                       |
| P3 PMT preserves stale declaration   | adopted           | 7.4 regenerate; AC14 + AC22                                                                     |
| P4 refuse + pinned validator outage  | adopted           | 6.4 release order; AC26                                                                         |
| P5 no public validator               | adapted (with S5) | decide-now 5: vendor core's built validator into bimpdf-site; AC9; pdf-cli runs examples (AC21) |
| P6 self-hosted runner on public repo | adopted           | AC7                                                                                             |
| P7 3D already off                    | adopted           | AC16 per-producer regression test; Problem/OPEN O6 corrected                                    |
| P8 page AF duplicates                | adopted           | 3.1 catalog only; page AF in Out with P8 as revival requirement                                 |
| P9 /NM on Revit annotations          | adopted           | section 2 "every annotation in the output"                                                      |
| P10 OCG default off                  | adopted           | 1.4                                                                                             |
| P11 VP agreement undefined           | adopted           | section 2 tolerance definition                                                                  |
| P12 disagreeing declarations         | adopted           | section 4: elements.json wins, validator errors                                                 |
| P13 encryption                       | adopted           | 1.2 readers MAY try                                                                             |
| P14 prefix hard-coded                | adopted           | `<PFX>` placeholder; decide-now 1                                                               |
| S1 cut manifest                      | adopted           | elements.json is the anchor with `/<PFX>_Elements`; manifest to Out                             |
| S2 profiles 4 -> 2                   | adopted           | `core`, `drawing` + archival flag; `linked`/`3d` to Out (D4 direction kept, deferred)           |
| S3 generate spec facts               | adopted           | AC1; drift check removed                                                                        |
| S4 one version carrier               | adopted           | XMP formatVersion                                                                               |
| S5 one implementation                | adopted           | AC9, AC12, AC21                                                                                 |
| S6 cut schema AF                     | adopted           | Out                                                                                             |
| S7 cut size key                      | adopted           | Out                                                                                             |
| S8 /<PFX>_PMT                        | kept              | AC24                                                                                            |
| S9 merge slices                      | adopted           | PLAN                                                                                            |
| S10 keep README-agent/llms           | kept              | D5                                                                                              |

Owner decisions untouched: D1-D5 verbatim. Deferring Tagged PDF and RichMedia (both named in D4) is recorded as
"direction kept, deferred" in Out, not as a reversal; flag it in the report so the owner can object.
