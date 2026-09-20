from bs4 import BeautifulSoup

with open(r"C:\Users\vigne\.gemini\antigravity-ide\brain\a77c323b-5b08-4023-8187-e577d0697a25\.system_generated\steps\4816\content.md", "r", encoding="utf-8") as f:
    text = f.read()

soup = BeautifulSoup(text, 'html.parser')
main_content = soup.find('div', {'class': 'mw-parser-output'})
if main_content:
    images = main_content.find_all('img')
    print(f"Total images: {len(images)}")
    for idx, img in enumerate(images[:20]):
        src = img.get('src', '')
        data_src = img.get('data-src', '')
        alt = img.get('alt', '')
        print(f"{idx}: alt='{alt}', src='{src}', data-src='{data_src}'")
