import cloudscraper

scraper = cloudscraper.create_scraper()
url = "https://marvelrivals.fandom.com/wiki/Rogue/Quotes"
try:
    resp = scraper.get(url)
    print(f"Status Code: {resp.status_code}")
    if resp.status_code == 200:
        print("Success! Content length:", len(resp.text))
        print("Sample content:")
        print(resp.text[:300])
except Exception as e:
    print(f"Error: {e}")
