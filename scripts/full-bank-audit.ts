// Generalizes the wave-D-only checks (analyze-wave-d.ts, detailed-audit-wave-d.ts,
// check-cs-cm-stems.ts, check-syntactic-flow.ts, list-syntactic-clashes.ts,
// find-cedillas.ts, check-negative-stems.ts, check-banned.ts, check-missing-expressions.ts)
// to run across the ENTIRE live bank (QUESTIONS), not just the last ~1000-question batch.
// Read-only: writes tmp/full-bank-audit.json, never touches bank source files.
import {existsSync, readFileSync, readdirSync, writeFileSync, mkdirSync} from 'node:fs';
import {resolve, join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {QUESTIONS} from '../src/app/questions.ts';
import type {Question} from '../src/app/models.ts';

const BANK_DIR = 'src/app/bank';
const BOOK_PREFIX: Record<string, string> = {
  'Kumar & Clark': 'kumar',
  'Lawrence': 'lawrence',
  'Sinopsis': 'sinopsis',
};

interface Finding {
  file: string;
  id: string;
  type: string;
  category: string;
  message: string;
  detail?: unknown;
}

const norm = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().replace(/[^a-z0-9]/g, '');

// --- 1. Discover every bank file's exported question array, build id -> file map ---
const bankFiles = readdirSync(BANK_DIR).filter(f => f.endsWith('.ts'));
const idToFile = new Map<string, string>();
let filesWithArrays = 0;
for (const f of bankFiles) {
  const path = join(BANK_DIR, f);
  let mod: Record<string, unknown>;
  try {
    mod = await import(pathToFileURL(resolve(path)).href);
  } catch (e) {
    console.error(`Failed to import ${path}: ${(e as Error).message}`);
    continue;
  }
  let sawArray = false;
  for (const val of Object.values(mod)) {
    if (Array.isArray(val) && val.length && typeof val[0] === 'object' && val[0] && 'id' in (val[0] as object) && 'stem' in (val[0] as object)) {
      sawArray = true;
      for (const q of val as {id: string}[]) {
        if (!idToFile.has(q.id)) idToFile.set(q.id, path);
      }
    }
  }
  if (sawArray) filesWithArrays++;
}
console.log(`Scanned ${bankFiles.length} bank files (${filesWithArrays} export question arrays), mapped ${idToFile.size} ids.`);

// --- 2. Run the full mechanical/style/citation battery over the live bank only ---
const findings: Finding[] = [];
const push = (file: string, id: string, type: string, category: string, message: string, detail?: unknown) =>
  findings.push({file, id, type, category, message, detail});

const dupWordRegex = /\b(de\s+de|în\s+în|in\s+in|la\s+la|și\s+și|si\s+si|cu\s+cu|se\s+se|care\s+care|pe\s+pe|din\s+din|o\s+o|un\s+un|ale\s+ale|ai\s+ai|al\s+al)\b/i;
function findRepeatedWords(text: string): string[] {
  const words = text.split(/[^\p{L}\p{N}\-]+/u).filter(Boolean);
  const dups: string[] = [];
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i].toLowerCase(), w2 = words[i + 1].toLowerCase();
    if (w1 === w2 && dupWordRegex.test(`${w1} ${w2}`)) dups.push(`${w1} ${w2}`);
  }
  return dups;
}
function checkParentheses(s: string): boolean {
  let count = 0;
  for (const c of s) { if (c === '(') count++; if (c === ')') count--; if (count < 0) return false; }
  return count === 0;
}

const cedillaChars = /[şţŞŢ]/;
const missingDiacriticsRegex = /\b(afectiuni|infectii|complicatii|manifestari|indicatii|contraindicatii|reactii|interventii|valvulara|chirurgicala|arteriala|pulmonara|hepatica|renala|secundara|primara)\b/i;
const ocrNumRegex = /\b(l0|l00|l-2|l-3|l\s+an|l\s+zi|l\s+luna|l\s+lună)\b/i;
const banned = /obligator|întotdeauna|intotdeauna|niciodată|niciodata|exclusiv|garantat/i;
const forbiddenStemTemplates: [RegExp, string][] = [[/^despre\b/i, 'starts with "Despre"'], [/sunt corecte afirmațiile/i, 'contains "sunt corecte afirmațiile"']];

const csHasPluralCue = /care dintre următoarele afirmații sunt (corecte|adevărate)|alegeți afirmațiile corecte|selectați afirmațiile (corecte|adevărate)|următoarele afirmații sunt adevărate|sunt corecte afirmațiile|care sunt\b/i;
const cmHasSingularCue = /care dintre următoarele afirmații este (corectă|adevărată)|alegeți afirmația corectă|selectați afirmația (corectă|adevărată)|identificați afirmația corectă|precizați enunțul corect|este adevărată afirmația/i;
const negativeStemCue = /(care dintre următoarele.*(nu|incorect|fals[aă]?|excepție|contraindicat))|\bnu\s+se\s+recomandă\b|\bcu\s+excepția\b|\bincorect[aă]?\b|\bfals[aă]?\b|\bgreșit[aă]?\b|\beronat[aă]?\b/i;

let scanned = 0;
const stemWordCounts: number[] = [];
let forbiddenTemplateHits = 0;
let negativeStemCount = 0;

for (const q of QUESTIONS as (Question & {reference?: {book: string; pdfPages: number[]; printedPages: number[]}; optionRationales?: string[]; textbookExpressions?: string[]})[]) {
  scanned++;
  const file = idToFile.get(q.id) ?? 'UNKNOWN-FILE';
  const stem = q.stem.trim();
  const options = q.options ?? [];
  const rationales = q.optionRationales ?? [];
  const correct = q.correct ?? [];
  const qType = q.type;
  stemWordCounts.push(stem.split(/\s+/).filter(Boolean).length);

  // CS/CM stem-phrasing mismatch
  if (qType === 'CS' && csHasPluralCue.test(stem)) push(file, q.id, qType, 'CS_CM_MISMATCH', `CS question has plural stem phrasing: "${stem}"`);
  if (qType === 'CM' && cmHasSingularCue.test(stem)) push(file, q.id, qType, 'CS_CM_MISMATCH', `CM question has singular stem phrasing: "${stem}"`);

  // Negative/exception stem — flag for polarity review, not itself an error
  if (negativeStemCue.test(stem)) { negativeStemCount++; push(file, q.id, qType, 'NEGATIVE_STEM_REVIEW', `Negative/exception phrasing — verify key matches what stem asks for: "${stem}"`); }

  // Key/rationale sign contradiction
  for (let i = 0; i < options.length; i++) {
    const letter = String.fromCharCode(65 + i);
    const isCorrect = correct.includes(i);
    const rat = (rationales[i] ?? '').trim();
    if (!rat) continue;
    if (isCorrect) {
      if (/^(Incorect|Fals|Greșit|Eronat)[,.:]/i.test(rat) ||
          /^(Afirmația|Enunțul|Opțiunea)\s+(este|rămâne)\s+(falsă|incorectă|greșită)/i.test(rat) ||
          /\b(este\s+falsă|este\s+incorectă|este\s+greșită|reprezintă\s+o\s+eroare)\b/i.test(rat)) {
        push(file, q.id, qType, 'KEY_RATIONALE_CONTRADICTION', `Option ${letter} is in the correct key, but its rationale reads as negative: "${rat}"`, {letter, option: options[i]});
      }
    } else {
      if ((/^(Corect|Adevărat)[,.:]/i.test(rat) ||
          /^(Afirmația|Enunțul|Opțiunea)\s+(este|rămâne)\s+(corectă|adevărată)/i.test(rat) ||
          /\b(este\s+corectă|este\s+adevărată|reprezintă\s+o\s+afirmație\s+corectă)\b/i.test(rat)) &&
          !/în mod corect|tratamentul corect|doza corectă|valoarea corectă|este corectă doar dacă|nu este corectă/i.test(rat)) {
        push(file, q.id, qType, 'KEY_RATIONALE_CONTRADICTION', `Option ${letter} is NOT in the correct key, but its rationale reads as affirming it: "${rat}"`, {letter, option: options[i]});
      }
    }
  }

  // Grammar/punctuation
  const stemDups = findRepeatedWords(stem);
  if (stemDups.length) push(file, q.id, qType, 'REPEATED_WORDS', `Repeated word(s) in stem: "${stemDups.join(', ')}"`, {stem});
  options.forEach((opt, idx) => {
    const d = findRepeatedWords(opt);
    if (d.length) push(file, q.id, qType, 'REPEATED_WORDS', `Repeated word(s) in option ${String.fromCharCode(65 + idx)}: "${d.join(', ')}"`, {opt});
  });
  if (!checkParentheses(stem)) push(file, q.id, qType, 'UNBALANCED_PARENTHESES', `Unbalanced parentheses in stem: "${stem}"`);
  options.forEach((opt, idx) => { if (!checkParentheses(opt)) push(file, q.id, qType, 'UNBALANCED_PARENTHESES', `Unbalanced parentheses in option ${String.fromCharCode(65 + idx)}: "${opt}"`); });

  if (cedillaChars.test(stem) || options.some(o => cedillaChars.test(o)) || rationales.some(r => cedillaChars.test(r)))
    push(file, q.id, qType, 'CEDILLA_DIACRITICS', 'Contains legacy cedilla ş/ţ instead of Romanian comma-below ș/ț');

  if (missingDiacriticsRegex.test(stem)) push(file, q.id, qType, 'MISSING_DIACRITICS', `Stem has unaccented word: "${stem.match(missingDiacriticsRegex)?.[0]}"`, {stem});
  options.forEach((opt, idx) => { if (missingDiacriticsRegex.test(opt)) push(file, q.id, qType, 'MISSING_DIACRITICS', `Option ${String.fromCharCode(65 + idx)} has unaccented word: "${opt.match(missingDiacriticsRegex)?.[0]}"`, {opt}); });

  if (ocrNumRegex.test(stem)) push(file, q.id, qType, 'OCR_NUMBER_ARTIFACT', `OCR artifact ('l' for '1') in stem: "${stem}"`);
  options.forEach((opt, idx) => { if (ocrNumRegex.test(opt)) push(file, q.id, qType, 'OCR_NUMBER_ARTIFACT', `OCR artifact ('l' for '1') in option ${String.fromCharCode(65 + idx)}: "${opt}"`); });

  const dotsCount = options.filter(o => o.trim().endsWith('.')).length;
  if (dotsCount > 0 && dotsCount < options.length) push(file, q.id, qType, 'INCONSISTENT_OPTION_PUNCTUATION', `${dotsCount}/${options.length} options end with a period`);
  const upperCount = options.filter(o => /^[A-ZĂÎÂȘȚ]/.test(o.trim())).length;
  if (upperCount > 0 && upperCount < options.length) push(file, q.id, qType, 'INCONSISTENT_OPTION_CAPITALIZATION', `${upperCount}/${options.length} options start with uppercase`);

  if (options.length === 5) {
    const lens = options.map(o => o.trim().length);
    const minL = Math.min(...lens), maxL = Math.max(...lens), avgL = lens.reduce((a, b) => a + b, 0) / 5;
    if (maxL > 3 * avgL && maxL > 150 && minL < 30) push(file, q.id, qType, 'OPTION_LENGTH_ANOMALY', `Option length anomaly: max ${maxL} chars vs min ${minL} chars`, {lens});
  }
  const normOpts = options.map(o => o.trim().toLowerCase());
  if (new Set(normOpts).size !== options.length) push(file, q.id, qType, 'DUPLICATE_OPTIONS', 'Duplicate option text within the same question');
  options.forEach((opt, idx) => { if (opt.trim().length < 3) push(file, q.id, qType, 'SUSPICIOUSLY_SHORT_OPTION', `Option ${String.fromCharCode(65 + idx)} is suspiciously short: "${opt}"`); });

  // Banned wording / forbidden stem templates
  options.forEach((opt, idx) => { if (banned.test(opt)) push(file, q.id, qType, 'BANNED_WORDING', `Option ${String.fromCharCode(65 + idx)} uses an absolute-wording banned term: "${opt}"`); });
  for (const [pat, why] of forbiddenStemTemplates) { if (pat.test(stem)) { forbiddenTemplateHits++; push(file, q.id, qType, 'FORBIDDEN_STEM_TEMPLATE', `Stem ${why}: "${stem}"`); } }

  // Syntactic flow: dangling stem clause vs. independent-sentence options
  if (/(se caracterizează prin|constă în|se definește prin)\s*:\s*$/i.test(stem)) {
    options.forEach((opt, i) => {
      if (/^(Este|Sunt|A fost|Tratamentul|Pacientul|Medicul|În mod)\b/i.test(opt))
        push(file, q.id, qType, 'SYNTACTIC_FLOW', `Stem ends with a dangling clause but option ${String.fromCharCode(65 + i)} reads as an independent sentence: "${opt.slice(0, 80)}"`);
    });
  }
  if (/\beste\s*:\s*$/i.test(stem)) {
    options.forEach((opt, i) => { if (/^Sunt\b/i.test(opt)) push(file, q.id, qType, 'SYNTACTIC_FLOW', `Stem ends with singular "este:" but option ${String.fromCharCode(65 + i)} starts with plural "Sunt"`); });
  }
  if (/\bafirma[țt]ii\s+(este|reprezint[aă])\b/i.test(stem) || /\bafirma[țt]ia\s+sunt\b/i.test(stem))
    push(file, q.id, qType, 'GRAMMAR_AGREEMENT', `Singular/plural agreement error in stem: "${stem}"`);

  // Textbook-expression citation verification (with ±5 page / word-level fallback)
  const ref = q.reference;
  const expressions = q.textbookExpressions ?? [];
  if (ref) {
    const prefix = BOOK_PREFIX[ref.book];
    const pdfPages = ref.pdfPages ?? [];
    if (prefix && pdfPages.length && expressions.length) {
      for (const expr of expressions) {
        const normExpr = norm(expr);
        if (normExpr.length < 4) continue;
        let found = false;
        for (const pdf of pdfPages) {
          const f = `tmp/source-books/${prefix}-${String(pdf).padStart(3, '0')}.txt`;
          if (existsSync(f) && norm(readFileSync(f, 'utf8')).includes(normExpr)) { found = true; break; }
        }
        if (found) continue;
        let foundNearbyOffset: number | null = null;
        for (const pdf of pdfPages) {
          for (let offset = -5; offset <= 5 && foundNearbyOffset === null; offset++) {
            if (offset === 0) continue;
            const f = `tmp/source-books/${prefix}-${String(pdf + offset).padStart(3, '0')}.txt`;
            if (existsSync(f) && norm(readFileSync(f, 'utf8')).includes(normExpr)) foundNearbyOffset = offset;
          }
        }
        if (foundNearbyOffset !== null) {
          push(file, q.id, qType, 'TEXTBOOK_EXPRESSION_PAGE_OFFSET', `Expression "${expr}" found only ${foundNearbyOffset} page(s) away from cited page(s) ${pdfPages.join(',')} — possible page-offset bug`, {expr, pdfPages, offset: foundNearbyOffset});
          continue;
        }
        const citedFile = `tmp/source-books/${prefix}-${String(pdfPages[0]).padStart(3, '0')}.txt`;
        let wordsFound = false;
        if (existsSync(citedFile)) {
          const raw = norm(readFileSync(citedFile, 'utf8'));
          const words = expr.split(/\s+/).filter(w => w.length > 2);
          wordsFound = words.length > 0 && words.every(w => raw.includes(norm(w)));
        }
        push(file, q.id, qType, wordsFound ? 'TEXTBOOK_EXPRESSION_REPHRASED' : 'TEXTBOOK_EXPRESSION_MISSING',
          wordsFound
            ? `Expression "${expr}" not found verbatim on cited page ${pdfPages.join(',')}, but its words are all present (likely OCR line-break/rephrase)`
            : `Expression "${expr}" not found on cited page(s) ${pdfPages.join(',')} or nearby ±5 pages, and its words aren't all present either`,
          {expr, pdfPages});
      }
    }
  }
}

// --- 3. Pattern-conformance metrics vs docs/exam-format-review.md baseline ---
stemWordCounts.sort((a, b) => a - b);
const median = stemWordCounts[Math.floor(stemWordCounts.length / 2)];
const mean = stemWordCounts.reduce((a, b) => a + b, 0) / stemWordCounts.length;
const csCount = QUESTIONS.filter(q => q.type === 'CS').length;
const cmCount = QUESTIONS.filter(q => q.type === 'CM').length;

const byCategory: Record<string, number> = {};
for (const f of findings) byCategory[f.category] = (byCategory[f.category] ?? 0) + 1;

const report = {
  generatedAt: new Date().toISOString(),
  scope: 'live bank (QUESTIONS)',
  totalQuestionsScanned: scanned,
  idsUnmappedToFile: findings.filter(f => f.file === 'UNKNOWN-FILE').length,
  examPatternConformance: {
    stemWordCount: {median, mean: Math.round(mean * 10) / 10, min: stemWordCounts[0], max: stemWordCounts.at(-1)},
    baselineFromSixRealExams: {stemWordMedianRange: [8, 10], note: 'docs/exam-format-review.md, six 2021-2025 exam copies'},
    csCount, cmCount, csShare: Math.round(1000 * csCount / (csCount + cmCount)) / 10,
    forbiddenTemplateHits,
    negativeStemCount,
  },
  findingCountsByCategory: byCategory,
  totalFindings: findings.length,
  findings,
};

mkdirSync('tmp', {recursive: true});
writeFileSync('tmp/full-bank-audit.json', JSON.stringify(report, null, 2));
console.log(`\n=== Full Bank Audit ===`);
console.log(`Questions scanned: ${scanned} (unmapped to a file: ${report.idsUnmappedToFile})`);
console.log(`Stem word count — median ${median}, mean ${report.examPatternConformance.stemWordCount.mean} (six real exams: median 8-10)`);
console.log(`CS/CM split: ${csCount} CS (${report.examPatternConformance.csShare}%) / ${cmCount} CM`);
console.log(`Total findings: ${findings.length}`);
for (const [cat, n] of Object.entries(byCategory).sort((a, b) => b[1] - a[1])) console.log(`  ${cat}: ${n}`);
console.log(`\nFull report written to tmp/full-bank-audit.json`);
