import cloudscraper

scraper = cloudscraper.create_scraper(browser={
    'browser': 'chrome',
    'platform': 'windows',
    'mobile': False
})

url = "https://marvelrivals.fandom.com/wiki/Adam_Warlock/Quotes"
try:
    resp = scraper.get(url)
    print(f"Status Code: {resp.status_code}")
    if resp.status_code == 200:
        print("Success!")
        print(resp.text[:300])
except Exception as e:
    print(f"Error: {e}")
