import urllib.request, re, json

url = 'https://www.arix-schilderbedrijf.nl/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')

all_imgs = set()

for m in re.findall(r'src=["\'](https?://[^"\']+)["\']', html):
    all_imgs.add(m)
for m in re.findall(r'data-src=["\'](https?://[^"\']+)["\']', html):
    all_imgs.add(m)
for m in re.findall(r'background-image:\s*url\(["\']?([^"\')]+)["\']?\)', html):
    all_imgs.add(m)
for m in re.findall(r'https?://[^\s"\'<>]+\.(?:jpe?g|png|webp|gif)', html):
    all_imgs.add(m)
for m in re.findall(r'https?://www\.arix-schilderbedrijf\.nl/wp-content/uploads/[^\s"\'<>]+', html):
    all_imgs.add(m)

print('=== ALL IMAGE URLS ===')
for u in sorted(all_imgs):
    print(u)
