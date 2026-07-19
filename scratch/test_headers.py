import requests

url = "https://marvelrivals.fandom.com/wiki/Rogue/Quotes"

headers_options = [
    # Option 1: Browser-like headers
    {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "DNT": "1",
        "Connection": "keep-alive",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Cache-Control": "max-age=0"
    },
    # Option 2: Minimal headers
    {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
]

for i, headers in enumerate(headers_options):
    try:
        resp = requests.get(url, headers=headers, timeout=10)
        print(f"Option {i+1}: Status Code: {resp.status_code}")
        if resp.status_code == 200:
            print("Success! Head of content:")
            print(resp.text[:200])
            break
    except Exception as e:
        print(f"Option {i+1} failed: {e}")
