from bs4 import BeautifulSoup

with open(r"C:\Users\vigne\.gemini\antigravity-ide\brain\a77c323b-5b08-4023-8187-e577d0697a25\.system_generated\steps\4816\content.md", "r", encoding="utf-8") as f:
    text = f.read()

soup = BeautifulSoup(text, 'html.parser')
main_content = soup.find('div', {'class': 'mw-parser-output'})

for word in ["deadpool", "hulk", "white fox"]:
    print(f"--- Matches for: {word} ---")
    imgs = main_content.find_all('img', alt=lambda x: x and word in x.lower())
    for img in imgs:
        print(f"Alt: {img.get('alt')}, data-src: {img.get('data-src') or img.get('src')}")
