import urllib.request, re

url = 'https://www.arix-schilderbedrijf.nl/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')

patterns = [
    r'cdn\.prod\.website-files\.com/[^\s"\'<>]+',
    r'assets\.website-files\.com/[^\s"\'<>]+',
    r'uploads-ssl\.webflow\.com/[^\s"\'<>]+',
    r'c3366c[^\s"\'<>]+',
    r'646e[^\s"\'<>]+',
]

for p in patterns:
    matches = re.findall(p, html)
    if matches:
        print('PATTERN:', p)
        for m in list(set(matches))[:20]:
            print(' ', m)
