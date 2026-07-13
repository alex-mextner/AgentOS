# Machine-Readable Registers

Extracted from the canonical corpus for the tracker and portal. Regenerate after corpus changes.

| File | Rows | Source of truth |
| --- | --- | --- |
| claim-register.csv | 34 claims | tables in docs/**, chiefly AOS-RES-003 |
| experiment-register.csv | 51 experiments | tables in docs/** |
| source-register.csv | normalized source digests | sources/normalized/AOS-SRC-N* |
| devices.csv | 11 targets/components | per-target matrix in AOS-HW-020 (device catalogue) |
| risk-register.csv | 328 entries | each doc's Risks and Open Questions section |

These are derived views; the canonical statements live in the referenced documents (`source_doc` column).
