import urllib.request, re

url = 'https://www.arix-schilderbedrijf.nl/wp-content/themes/arix-schilderbedrijf-4/assets/images/'
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    imgs = re.findall(r'href=["\']([^"\']+\.(?:jpe?g|png|webp|gif))["\']', html)
    print('Theme images:')
    for img in imgs:
        print(' ', img)
except Exception as e:
    print('Error:', e)
