"""Darken text colours that fail WCAG AA (4.5:1) on the light page background.

Only `color:` declarations are touched, and only colours meant for light surfaces
(contrast already >= 2:1 on the page). Each is darkened in OKLCH, keeping its hue,
until it reaches 4.6:1 on #f7f8f5. Run scripts/theme-tokens.py afterwards.
"""
import importlib.util, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location('tt', ROOT / 'scripts' / 'theme-tokens.py')
tt = importlib.util.module_from_spec(spec); spec.loader.exec_module(tt)
CSS = ROOT / 'src' / 'styles.css'
PAGE = 'f7f8f5'

def lum(h):
    r, g, b = (tt.srgb_to_lin(int(h[i:i + 2], 16) / 255) for i in (0, 2, 4))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
def contrast(a, b):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)
def darker(h):
    L, C, hue = tt.to_oklch(*(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)))
    while L > 0.2:
        L -= 0.01
        lin = tt.from_oklch(L, C, hue)
        out = ''.join(f'{round(255 * min(1.0, max(0.0, tt.lin_to_srgb(min(1.0, max(0.0, x)))))):02x}' for x in lin)
        if contrast(out, PAGE) >= 4.6: return out
    return h

css = CSS.read_text(encoding='utf-8')
body_start = css.index(tt.END) + len(tt.END)
head, body = css[:body_start], css[body_start:]
changed = {}
def fix(m):
    h = m.group(1)
    if len(h) != 6: return m.group(0)
    c = contrast(h, PAGE)
    if 2 <= c < 4.5:
        changed[h] = changed.get(h) or darker(h)
        return f'{m.group(0)[:m.start(1) - m.start(0)]}{changed[h]})'
    return m.group(0)
body = re.sub(r'(?<![-\w])color:var\(--k-([0-9a-f]{6,8})\)', fix, body)
CSS.write_text(head + body, encoding='utf-8', newline='')
for k, v in changed.items(): print(f'#{k} ({contrast(k, PAGE):.2f}) -> #{v} ({contrast(v, PAGE):.2f})')
