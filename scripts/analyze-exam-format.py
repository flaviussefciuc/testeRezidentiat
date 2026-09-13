"""Read user-supplied exam copies locally; publish metadata, never the exam text.

Usage: python scripts/analyze-exam-format.py DIRECTORY
The extraction and candidate item text remain in ignored tmp/exam-copies.
Counts are extraction diagnostics, not proof of completeness or answer keys.
"""
import hashlib
import json
import re
import statistics
import sys
from pathlib import Path
import pypdfium2 as pdfium


def main():
    source = Path(sys.argv[1])
    out = Path('tmp/exam-copies')
    out.mkdir(parents=True, exist_ok=True)
    report = []
    for path in sorted(source.glob('*.pdf')):
        doc = pdfium.PdfDocument(str(path))
        pages = []
        for index in range(len(doc)):
            page = doc[index]
            text_page = page.get_textpage()
            text = text_page.get_text_range().replace('\r', '')
            pages.append({'pdfPage': index + 1, 'text': text})
            text_page.close()
            page.close()
        headings = [p['pdfPage'] for p in pages if 'ÎNTREBĂRI TIP' in p['text']]
        if '--render-transitions' in sys.argv and headings:
            image_page = doc[headings[-1] - 1]
            image_page.render(scale=1.3).to_pil().save(out / f'transition-{len(report) + 1}.png')
            image_page.close()
        doc.close()
        text = '\n'.join(p['text'] for p in pages)
        starts = list(re.finditer(r'(?m)^\s*(\d{1,3})\.\s+', text))
        candidates = []
        for index, start in enumerate(starts):
            number = int(start.group(1))
            if not 1 <= number <= 200:
                continue
            end = starts[index + 1].start() if index + 1 < len(starts) else len(text)
            body = text[start.end():end]
            option = re.search(r'(?m)^A\.\s+', body)
            if not option:
                continue
            labels = re.findall(r'(?m)^([A-E])\.\s+', body)
            candidates.append({'number': number, 'stem': ' '.join(body[:option.start()].split()),
                               'optionLabels': labels, 'text': body})
        by_number = {}
        for item in candidates:
            by_number.setdefault(item['number'], []).append(item)
        complete = {n: rows[0] for n, rows in by_number.items()
                    if len(rows) == 1 and rows[0]['optionLabels'] == list('ABCDE')}
        lengths = [len(q['stem'].split()) for q in complete.values()]
        info = {
            'filename': path.name, 'sha256': hashlib.sha256(path.read_bytes()).hexdigest(),
            'pdfPages': len(pages), 'detectedUniqueNumbers': len(by_number),
            'numbersMissingFromExtraction': sorted(set(range(1, 201)) - set(by_number)),
            'repeatedNumbers': {str(n): len(rows) for n, rows in by_number.items() if len(rows) > 1},
            'itemsWithOneFiveOptionExtraction': len(complete),
            'medianStemWordsAmongThoseItems': statistics.median(lengths) if lengths else None,
            'sectionHeadingPages': headings,
            'answerKeyStatus': 'No separate answer-key section identified; keys and CM cardinality cannot be inferred from option wording.',
        }
        report.append(info)
        (out / (path.stem + '.json')).write_text(json.dumps({'pages': pages, 'items': candidates}, ensure_ascii=False), encoding='utf-8')
        print(json.dumps(info, ensure_ascii=False))
    Path('docs/exam-copy-inventory.json').write_text(json.dumps({
        'date': '2026-09-13', 'scope': 'User-provided restored copies; extraction diagnostics plus a separate sampled editorial review. Filenames do not establish official authenticity.',
        'copies': report,
    }, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
