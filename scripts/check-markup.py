"""Validate generated fragments without opening or automating a browser."""
from html.parser import HTMLParser
from pathlib import Path
import json, re

ROOT = Path(__file__).resolve().parents[1]
VOID = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}

class Check(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack, self.ids, self.labels, self.links, self.errors = [], set(), [], [], []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'):
            if a['id'] in self.ids: self.errors.append('Duplicate ID: '+a['id'])
            self.ids.add(a['id'])
        if tag == 'label' and a.get('for'): self.labels.append(a['for'])
        if tag == 'a': self.links.append(a.get('href',''))
        if tag == 'svg' and not a.get('aria-label'): self.errors.append('SVG lacks accessible description')
        if tag not in VOID: self.stack.append(tag)
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag,attrs)
        if tag not in VOID: self.handle_endtag(tag)
    def handle_endtag(self,tag):
        if tag in VOID: return
        if not self.stack or self.stack[-1] != tag:
            self.errors.append('Unbalanced tag: '+tag+'; stack='+repr(self.stack[-4:]))
        else: self.stack.pop()

renderings = json.loads(Path('/tmp/fieldwork-renderings.json').read_text())
local_refs = 0
for page in renderings:
    parser=Check();parser.feed(page['html']);parser.close()
    assert not parser.errors, (page['route'],parser.errors)
    assert not parser.stack, (page['route'],parser.stack)
    assert all(x in parser.ids for x in parser.labels), (page['route'],'Broken form label')
    for url in parser.links:
        if url.startswith('#lesson/'):
            _, topic, stage = url.split('/')
            assert 1 <= int(topic) <= 33 and 0 <= int(stage) <= 4, url
            local_refs+=1
        if url.startswith('https:'):
            assert re.match(r'https://(?:ncert\.nic\.in|cbseacademic\.nic\.in)/',url), url

entry=(ROOT/'design/unit-1-preview.html').read_text()
for ref in re.findall(r'(?:src|href)="(\.\./[^"#]+)"',entry):
    assert (ROOT/'design'/ref).is_file(), ref
css=(ROOT/'app/course.css').read_text()
assert css.count('{')==css.count('}'), 'CSS brace mismatch'
assert '@media(max-width:800px)' in css and '@media(max-width:480px)' in css
assert 'prefers-reduced-motion' in css and ':focus-visible' in css
print(f'{len(renderings)} generated fragments: balanced markup, unique IDs, valid form labels; {local_refs} lesson links checked. Local assets and official-source hosts checked. Browser layout is not tested by this script.')
