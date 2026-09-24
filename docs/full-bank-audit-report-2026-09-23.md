# Whole-bank quality audit — 2026-09-23

Scope: the **live bank** (`QUESTIONS` = `SOURCE_CHECKED_QUESTIONS`, 3,581 questions, 170 `src/app/bank/*.ts` files). Report-only — nothing in the bank, review ledger, or docs was edited as part of this pass.

## Executive summary

- **Structural integrity: clean.** Re-ran `npm run audit:questions`. 0 structural errors, 0 exact duplicates, 0 invalid/stale reviews (all 3,581 live questions have a current, fingerprint-matched, fully-passed review record), IDs unique, no missing CM cardinality format.
- **Medical-accuracy deep-dive: clean on the sampled slice.** 172 questions hand-verified against the actual cited source-textbook pages (Kumar & Clark, Lawrence, Sinopsis) across all four wave types (`-advanced/-b/-c/-d`). **0 citation or key/rationale errors found.** One coverage gap: `cardiologie-c.ts`/`-d.ts` (~140 questions) weren't individually re-verified this round (see §5).
- **New whole-bank mechanical sweep found real, previously-unchecked issues**, concentrated almost entirely in the **8 earliest-authored `-advanced.ts` files** (hipertensiune, tromboembolism, diabetes, diabetes-complications, thyroid, rheumatology, pneumologie, hiv) — written *before* the banned-wording/cedilla/CS-CM checks existed. The most recent "wave D" batch (already vetted by existing scripts) and most other files are essentially clean of these.
- Several of the audit heuristics I generalized turned out to be **high false-positive-rate on close inspection** (capitalization, terminal punctuation, "repeated words," most of the negative-stem/CS-CM flags) — see §3 for why, so these aren't added to the punch list as real defects.
- One stale, user-facing doc: `README.md` still says "99 grile active" and describes the exam simulator as unavailable; both are wrong (bank has 3,581 questions, `EXAM_AVAILABLE` is true).

## 1. Structural & review-ledger integrity (whole bank)

Regenerated `docs/question-quality-audit.json` (previously dated 2026-09-13, now current):

| Check | Result |
|---|---|
| Structural errors (option count/distinctness, correct-index bounds, CS/CM cardinality, valid topicId) | **0** |
| Exact stem+options duplicates | **0** |
| IDs unique | **yes** |
| Invalid/stale reviews (fingerprint mismatch, failed check, unresolved issue) across all 3,581 | **0** |
| Missing CM cardinality format (2/3/4-answer) | none missing |
| CM cardinality distribution | 2-answer 630, 3-answer 1399, 4-answer 756 (27.1% of CM is 4-answer) |
| Banned absolute-wording cues (`obligatoriu/întotdeauna/niciodată/exclusiv/garantat`) in options | **0** |
| Near-identical stems (same normalized stem, different options) | 6 pairs — see §6, benign |

This part of the tooling (`scripts/audit-question-quality.ts`) already ran whole-bank before this audit (it iterates `ADVANCED_CANDIDATES`, which is every bank file) — it just hadn't been re-run since 2026-09-13. Re-running it now confirms the last edits (HEAD commit `d519f6f`) left the bank structurally clean.

## 2. New tooling: whole-bank mechanical/style/citation sweep

Nearly every other check script (`check-banned.ts`, `check-cs-cm-stems.ts`, `check-negative-stems.ts`, `check-syntactic-flow.ts`, `list-syntactic-clashes.ts`, `find-cedillas.ts`, `analyze-wave-d.ts`, `detailed-audit-wave-d.ts`, `check-missing-expressions.ts`) was hard-coded to the 39 "wave D" files only. I wrote `scripts/full-bank-audit.ts`, which generalizes all of that logic to run over **all 170 bank files / all 3,581 live questions**, discovering file→question ownership by dynamic import instead of a fixed list. Output: `tmp/full-bank-audit.json`.

Result: **625 findings touching 490 distinct questions (13.7% of the bank)** — but as detailed in §3 below, most finding *categories* turned out to be dominated by heuristic false positives once spot-checked against the raw option text. The real, actionable subset is in §4.

| Category | Findings | Distinct questions | Files | Real / false-positive after spot-check |
|---|---:|---:|---:|---|
| INCONSISTENT_OPTION_CAPITALIZATION | 187 | 187 | 91 | **~100% false positive** |
| SYNTACTIC_FLOW | 94 | 68 | 37 | mostly intentional style, not a defect |
| FORBIDDEN_STEM_TEMPLATE | 75 | 53 | 8 | **real** |
| CEDILLA_DIACRITICS | 70 | 70 | 14 | **real** |
| TEXTBOOK_EXPRESSION_REPHRASED | 58 | 52 | 37 | mostly benign (OCR line-break/rephrase) |
| TEXTBOOK_EXPRESSION_PAGE_OFFSET | 47 | 33 | 24 | worth a citation-accuracy pass |
| TEXTBOOK_EXPRESSION_MISSING | 46 | 46 | 34 | worth a citation-accuracy pass |
| INCONSISTENT_OPTION_PUNCTUATION | 18 | 18 | 13 | **mostly false positive** (abbreviation periods) |
| SUSPICIOUSLY_SHORT_OPTION | 17 | 12 | 12 | **false positive** (legitimate short numeric answers) |
| NEGATIVE_STEM_REVIEW | 7 | 7 | 7 | 1 real / 6 false positive |
| REPEATED_WORDS | 3 | 3 | 3 | **false positive** (medical abbreviation "CU") |
| CS_CM_MISMATCH | 2 | 2 | 2 | 1 real / 1 false positive |
| MISSING_DIACRITICS | 1 | 1 | 1 | **real** |
| KEY_RATIONALE_CONTRADICTION, UNBALANCED_PARENTHESES, OCR_NUMBER_ARTIFACT, BANNED_WORDING, DUPLICATE_OPTIONS, OPTION_LENGTH_ANOMALY, GRAMMAR_AGREEMENT | 0 | — | — | clean bank-wide |

## 3. Why several categories are mostly noise (spot-check evidence)

I hand-checked 6+ examples per category before trusting the counts. Every one of the following turned out to have a mechanical, non-medical explanation:

- **INCONSISTENT_OPTION_CAPITALIZATION (187)** — the check flags an option set where not all options start with an uppercase Latin/Romanian letter. Every sample checked (`infectii-chir-adv-012`, `obstetrica-adv-004`, `ortopedie-adv-012`, `dermato-adv-015`, `epidemio-adv-005`, `orl-adv-014`) turned out to be options that legitimately start with a **lowercase scientific symbol** ("pH sub 7,2…", "α-fetoproteina…") or a **digit** ("2 zile–6 săptămâni…", "1 cm", "0,5 cm"). None were actual capitalization typos. This heuristic needs a digit/Greek-letter/chemical-symbol exclusion before it's worth trusting; as-is, treat this category as noise.
- **INCONSISTENT_OPTION_PUNCTUATION (18)** — checked `sepsis-adv-009`: the "extra" trailing period belongs to the Latin abbreviation `spp.` ("*Pseudomonas* și *Acinetobacter* spp."), not a sentence-terminal period. Same abbreviation-period pattern likely explains most of the 18.
- **SUSPICIOUSLY_SHORT_OPTION (17→12 distinct)** — every sample (`infectii-chir-adv-009`, `gastro-adv-003`, `ortopedie-adv-029`, `ficat-splina-adv-016`) is a legitimate one/two-token percentage answer ("5%", "1%") in a "what proportion…" question — not truncated or incomplete text.
- **REPEATED_WORDS (3)** — all three ("cu cu") are the preposition "cu" immediately followed by the medical abbreviation **CU** (colită ulcerativă), which the case-insensitive check can't distinguish from a genuine doubled word.
- **NEGATIVE_STEM_REVIEW (7→1 real)** — the flag matches any occurrence of "nu" as a bare substring after "care dintre următoarele," which also matches inside ordinary words (`anti-genUl` → "genul" contains "nu"; `diapaz-ONUl` → "zonul" contains "nu"). Two hits are that substring bug (`orl-adv-006`, `urologie-adv-007`, and the same word reappears in `urologie-adv-064`); three more (`obstetrica-adv-038` "sarcina falsă", `diabet-adv-100` "valoare fals scăzută", `epidemio-adv-023` "fals-pozitive") are legitimate clinical terminology, not "identify the false statement" stems. Only **`perioperator-adv-008`** ("situație chirurgicală care «nu trebuie să aibă loc niciodată»…") is a genuine negative/exclusion-style stem — and on inspection its key correctly targets the "never event," so no fix needed, just confirmed as correctly polarized.
- **CS_CM_MISMATCH (2→1 real)** — `cardiologie-adv-136` is a false positive: "…complexe largi **care sunt** ventriculare este de circa:" is a relative clause modifying the noun, not a plural-answer cue; it's correctly CS (one numeric answer). `tromboembolism-adv-030` (in `tromboembolism-b.ts`) is real: it's typed `CM` but its stem says "**Identificați afirmația corectă**" (singular imperative) — worth an editorial look at whether the type or the stem wording should change.
- **SYNTACTIC_FLOW (94→68 distinct)** — the pattern (stem ends "…se caracterizează prin:" / "…constă în:", options are complete independent sentences like "Este…"/"Tratamentul constă în…") is extremely common and cuts across almost every topic and every wave, which is a strong sign it's the bank's (and the source material's) **intentional, standard construction** for descriptive CM items — matching `docs/exam-format-review.md`'s own observation that real-exam stems commonly ask for "caracteristici, mecanisme, cauze, diagnostic sau tratament" answered as freestanding statements. It's mild grammatical friction (the colon technically invites a continuation clause) but not a comprehension-breaking error, and fixing 68 questions' worth of stems would be a large stylistic rewrite for low payoff. I'd leave this as a documented style note rather than a fix-it punch-list item, unless you want the wording tightened.

## 4. Real, actionable findings

### 4a. Forbidden stem templates (53 questions, 8 files) — violates the bank's own authoring rule
`scripts/_tmp-authoring-brief.md` and `check-banned.ts` explicitly ban stems starting with "Despre…" or containing "…sunt corecte afirmațiile" (both read awkwardly and were banned specifically to keep stems idiomatic). All 53 hits are concentrated in the earliest-authored `-advanced.ts` files, predating that rule:

| File | Hits |
|---|---:|
| hipertensiune-advanced.ts | 24 |
| tromboembolism-advanced.ts | 16 |
| diabetes-advanced.ts | 12 |
| diabetes-complications-advanced.ts | 10 |
| thyroid-advanced.ts | 6 |
| rheumatology-advanced.ts | 4 |
| advanced-revisions.ts | 2 |
| pneumologie-advanced.ts | 1 |

Example: `hematologie-adv-016` — *"Despre formele și transformările folaților sunt corecte afirmațiile:"*

### 4b. Cedilla encoding artifacts (70 questions, 14 files) — real spelling/encoding defect
Turkish ş/ţ instead of Romanian ș/ț (comma-below). Same pre-wave-D files dominate:

| File | Hits |
|---|---:|
| pneumologie-advanced.ts | 21 |
| hipertensiune-advanced.ts | 15 |
| tromboembolism-advanced.ts | 13 |
| hiv-advanced.ts | 10 |
| (10 other files, 1-2 hits each) | 11 |

This is a pure find-and-replace fix (ş→ș, ţ→ț) with no content risk.

### 4c. Textbook-citation integrity (126 findings across ~34-37 files, mostly in `-advanced.ts` files not covered by prior audits)
- **46 questions**: cited `textbookExpressions` phrase not found on the cited page nor within ±5 pages nor as scattered words — worth a manual re-check against the actual source page to confirm the underlying fact (not just the phrase) is still correctly cited.
- **33 questions**: expression found only on a page 1-3 away from the one cited — classic page-offset bug signature (the same failure mode `docs/source-discrepancies.md` already documents for other chapters). Worth checking whether `reference.pdfPages`/the chapter's `pdfOffset` formula is off by a page for these.
- **52 questions**: expression's individual words are all present on the cited page but not as an exact phrase — most likely benign (OCR line-break or minor rephrasing), lower priority than the above two.

None of these were contradicted by the deep-dive sample (§5) — the sampled files that also had citation flags (e.g. thyroid/endocrinologie) still checked out on manual read of the actual page text — so this is likely mostly a **citation-string precision issue**, not a wrong-fact issue. But it wasn't verified for all 126, so it's listed as the top follow-up item.

### 4d. One genuine spelling defect
`pancreas-adv-085`, option A: *"…gastrica stângă, splenică și **hepatica** comună"* → should be "**hepatică**" (missing diacritic on the adjective).

### 4e. One genuine CS/CM stem-wording mismatch
`tromboembolism-adv-030` (in `tromboembolism-b.ts`): typed `CM` (2-4 correct answers) but stem reads "**Identificați afirmația corectă**…" (singular). Needs an editorial decision: reword the stem to plural, or reclassify as CS if only one option is actually meant to be correct.

## 5. Medical-accuracy deep-dive (stratified manual sample against source PDFs)

Sampled 172 questions spread across all three source textbooks and all four wave types, reading the actual cited page text in `tmp/source-books/` for each:

| Slice | Files | Sampled | Confirmed | Flagged |
|---|---|---:|---:|---:|
| Kumar & Clark (hematologie, cardiologie) | 8 | 52 | 52 | 0 |
| Lawrence (trauma, vascular) | 8 | 56 | 56 | 0 |
| Sinopsis (pediatrie, psihiatrie) | 8 | 64 | 64 | 0 |
| **Total** | **24** | **172** | **172** | **0** |

For every sampled question, the cited passage genuinely supported the keyed answer, and no excluded option's rationale was contradicted by the source text — including precise numeric thresholds (hemorrhage-class volumes, AF epidemiology figures, hepcidin/transferrin mechanics, DDH/vascular-anomaly distractor patterns) and correctly-flagged inverted distractors (Stanford A/B urgency, subclavian-steal laterality, Doppler waveform direction). Distractors consistently used the documented "near-miss" technique (a real fact borrowed from an adjacent entity), not fabricated wrong answers.

**Coverage gap:** `cardiologie-c.ts` and `cardiologie-d.ts` (~140 questions, same id-continuum/pipeline as the verified `cardiologie-advanced.ts`/`-b.ts`) were not individually re-verified — the Kumar fork ran out of budget after cardiologie turned out to span far more content than the sampling plan assumed. Same authoring pipeline as verified files, so risk is likely low, but this is inference, not a checked fact.

Given 0/172 issues found, the sampled evidence supports the bank's medical accuracy being sound; it does not (and cannot, from a sample) certify all 3,581 questions.

## 6. Other observations

- **6 near-identical-stem pairs** (`docs/question-quality-audit.json`'s `possibleDuplicateStems`) are the same generic opening sentence reused across two *different* files/topics for the same clinical entity (e.g. "Displazia de dezvoltare a șoldului:" appears in both `pediatrie-adv-039` and `ortopedie-adv-040`, "Cistita bacteriană:" in both `urologie-adv-079` and `urologie-adv-028`). The structural audit already confirmed these aren't exact duplicates (different options/facts) — this is normal cross-chapter topical overlap, not a defect.
- **Topic coverage is uneven**: lowest-covered live topics are epidemio (24), hemostaza (31), ati (37), perioperator (40), dermato (42) — versus diabet at 152. Not a correctness issue, but worth knowing if you want to balance future authoring.
- **`README.md` is stale and misleading**: it still says "99 de grile active" and describes the 200-question exam simulator as "temporar indisponibilă" pending enough questions — both are false now (3,581 live questions, `EXAM_AVAILABLE` is `true`). This doesn't affect question content but is user-facing incorrect information.

## 7. Prioritized punch list for a follow-up fix pass (not executed this round)

1. **Cedilla cleanup** (70 questions, 14 files) — mechanical, zero content risk, quick win.
2. **Forbidden-stem-template rewrite** (53 questions, 8 files) — needs a human/editorial rewrite of each "Despre…"/"…sunt corecte afirmațiile" stem to something idiomatic; not a pure find-and-replace.
3. **Textbook-citation re-verification** (126 findings, mostly in the same pre-wave-D `-advanced.ts` files) — re-check the 46 "missing" and 33 "page-offset" cases against the actual cited fact, not just the phrase; the 52 "rephrased" ones are lower priority.
4. **`pancreas-adv-085`** — fix "hepatica" → "hepatică" (one word).
5. **`tromboembolism-adv-030`** — editorial call on stem wording vs. CM type.
6. **`README.md`** — update the stale "99 grile" / simulator-unavailable text to match current bank size and `EXAM_AVAILABLE` status.
7. **Optional/lower priority**: re-verify `cardiologie-c.ts`/`-d.ts` (~140 questions) against source pages to close the one coverage gap from the deep-dive sample; tighten `INCONSISTENT_OPTION_CAPITALIZATION`/`SUSPICIOUSLY_SHORT_OPTION` heuristics (exclude digit/Greek-letter/abbreviation-leading options) if you want to keep using them in future runs — as-is they're not worth acting on.

## Artifacts produced

- `scripts/full-bank-audit.ts` — new, reusable whole-bank generalization of the wave-D-only checks (kept in the repo for future re-runs).
- `tmp/full-bank-audit.json` — full machine-readable findings (git-ignored, like the other audit artifacts).
- `docs/question-quality-audit.json` — regenerated (was 10 days stale).
- This report.

## Addendum — 2026-09-24: guessability and exam-format findings (corrects §3)

A follow-up pass measured two things this report did not check: whether answers can be found **without medical knowledge**, and whether the **option format** matches the six past exam copies (`tmp/exam-copies/*.json`, 1,198 parsed items). Tooling: `scripts/cue-metrics.ts` and `npm run audit:cues` (writes `tmp/cue-audit.json`; baseline saved as `tmp/cue-audit-baseline.json`).

| Measure (live bank, 3,581 items) | Bank | Reference |
|---|---:|---:|
| CS: correct option is the longest | 63.1% | 20% by chance |
| Cue-only guesser (length + fixed absolute-word list), projected score | **612 / 950** | 431 / 950 random |
| Absolute wording (doar/numai/niciodată/întotdeauna/exclusiv/toate/niciun…): correct vs incorrect options | 2.7% vs 11% | should be balanced |
| Option median length | 11 words | **5 words** in past exams |
| Options that start lowercase (continuation of the stem) | 0.5% | **58%** in past exams |
| CS key at position A / CM option E correct | 81% / 3.4% | ~20% / ~60% |

**Corrections to §3:**
- **SYNTACTIC_FLOW is a real format defect, not intentional style.** The past exams answer a stem such as "…se caracterizează prin:" with short, lowercase fragments that continue the stem. The bank's full, freestanding sentences are what diverges from the exam.
- **INCONSISTENT_OPTION_CAPITALIZATION points the wrong way.** Lowercase-initial options are the exam norm. Use `audit:cues` (lowercase-fragment rate) as the check instead.
- The review field `noAnswerLengthOrAbsoluteWordingCue: true` was set on every record even though the cues are measurable. Rewrite reviews (`scripts/record-rewrite-reviews.ts`) now set it only when `questionCues()` finds nothing.

The remediation (per-topic source re-verification, rewrite into exam format, versioned `-v2` IDs with the old versions frozen in `src/app/bank/retired/`) follows the plan recorded in the remediation report.
