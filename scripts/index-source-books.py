"""Index supplied books locally; never publish extracted textbook text.
Usage: python scripts/index-source-books.py --kumar PATH --lawrence PATH --sinopsis PATH
Requires pypdfium2. Output stays under the gitignored tmp/source-books directory.
"""
import argparse
import hashlib
import json
from pathlib import Path
import pypdfium2 as pdfium


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    for name in ('kumar', 'lawrence', 'sinopsis'):
        parser.add_argument('--' + name, type=Path, required=True)
    args = parser.parse_args()
    out = Path('tmp/source-books')
    out.mkdir(parents=True, exist_ok=True)
    inventory = []
    for name, path in vars(args).items():
        reader = pdfium.PdfDocument(str(path))
        pages = []
        try:
            for i in range(len(reader)):
                page = reader[i]
                textpage = page.get_textpage()
                try:
                    extracted = textpage.get_text_range() or ''
                    pages.append({'pdfPage': i + 1, 'text': extracted})
                    (out / f'{name}-{i + 1:03}.txt').write_text(extracted, encoding='utf-8')
                finally:
                    textpage.close()
                    page.close()
        finally:
            reader.close()
        (out / f'{name}.json').write_text(json.dumps(pages, ensure_ascii=False), encoding='utf-8')
        with path.open('rb') as stream:
            digest = hashlib.file_digest(stream, 'sha256').hexdigest()
        inventory.append({'id': name, 'filename': path.name, 'sha256': digest,
                          'pdfPages': len(pages),
                          'textPages': sum(len(p['text'].strip()) > 100 for p in pages)})
        print(json.dumps(inventory[-1], ensure_ascii=True), flush=True)
    (out / 'inventory.json').write_text(json.dumps(inventory, indent=2) + '\n', encoding='utf-8')


if __name__ == '__main__':
    main()
