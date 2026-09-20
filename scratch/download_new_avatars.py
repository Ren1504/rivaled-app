import os
import re
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

# The list of target heroes to match
HEROES_LIST = [
    "Adam Warlock", "Angela", "Black Cat", "Black Panther", "Black Widow",
    "Blade", "Captain America", "Cloak & Dagger", "Cyclops", "Daredevil",
    "Deadpool", "Devil Dinosaur", "Doctor Strange", "Elsa Bloodstone", "Emma Frost",
    "Gambit", "Groot", "Hawkeye", "Hela", "Hulk", "Human Torch", "Invisible Woman",
    "Iron Fist", "Iron Man", "Jeff the Land Shark", "Loki", "Luna Snow", "Magik",
    "Magneto", "Mantis", "Mister Fantastic", "Moon Knight", "Namor", "Peni Parker",
    "Phoenix", "Psylocke", "Rocket Raccoon", "Rogue", "Scarlet Witch", "Spider-Man",
    "Squirrel Girl", "Star-Lord", "Storm", "The Punisher", "The Thing", "Thor",
    "Ultron", "Venom", "White Fox", "Winter Soldier", "Wolverine", "The Hood"
]

def sanitize_slug(name):
    return name.lower().strip() \
        .replace(' & ', '-and-') \
        .replace(' ', '-') \
        .replace('.', '') \
        .replace("'", "") \
        .replace('"', "")

def main():
    html_path = r"C:\Users\vigne\.gemini\antigravity-ide\brain\a77c323b-5b08-4023-8187-e577d0697a25\.system_generated\steps\4816\content.md"
    dest_dir = r"d:\Flutter\game ts\rivaled-app\new_avatars"
    os.makedirs(dest_dir, exist_ok=True)
    
    with open(html_path, "r", encoding="utf-8") as f:
        text = f.read()

    soup = BeautifulSoup(text, 'html.parser')
    main_content = soup.find('div', {'class': 'mw-parser-output'})
    if not main_content:
        print("Error: mw-parser-output div not found.")
        return

    images = main_content.find_all('img')
    print(f"Total images found: {len(images)}")
    
    downloaded_count = 0
    matched_heroes = {}

    for img in images:
        alt = img.get('alt', '').strip()
        is_hero_icon = False
        raw_name = ""
        
        if alt.startswith('Hero Icon '):
            is_hero_icon = True
            raw_name = alt[len('Hero Icon '):].strip()
        elif alt == 'Deadpool DEFAULT Table Icon':
            is_hero_icon = True
            raw_name = 'Deadpool'
        elif alt == 'White Fox DEFAULT Table Icon':
            is_hero_icon = True
            raw_name = 'White Fox'
            
        if is_hero_icon:
            # Find closest matching hero in HEROES_LIST
            matched_hero = None
            for h in HEROES_LIST:
                if raw_name.lower() == h.lower() or raw_name.lower().replace('-', ' ') == h.lower().replace('-', ' '):
                    matched_hero = h
                    break
            
            if not matched_hero:
                # Direct flexible checks
                if "cloak" in raw_name.lower() and "dagger" in raw_name.lower():
                    matched_hero = "Cloak & Dagger"
                elif "jeff" in raw_name.lower():
                    matched_hero = "Jeff the Land Shark"
                elif "punisher" in raw_name.lower():
                    matched_hero = "The Punisher"
                elif "thing" in raw_name.lower():
                    matched_hero = "The Thing"
                elif "hood" in raw_name.lower():
                    matched_hero = "The Hood"
                elif "hero hulk" in raw_name.lower():
                    matched_hero = "Hulk"
                elif "fury" in raw_name.lower(): # Just in case
                    continue

            if matched_hero:
                # Get the link from data-src or src
                url = img.get('data-src', '') or img.get('src', '')
                if url.startswith('data:'):
                    # Fallback to src if data-src was empty/placeholder
                    url = img.get('src', '')
                    
                if not url or url.startswith('data:'):
                    continue
                
                # Normalize wikia image URLs (remove scale downs, cb parameters etc to get high-quality raw image)
                # Wiki URL format: https://static.wikia.nocookie.net/.../image.png/revision/latest/scale-to-width-down/150?cb=...
                # We strip the parts after the filename (i.e. keep up to .png)
                clean_url = url
                png_match = re.search(r'^(https://.*?\.png)', url)
                if png_match:
                    clean_url = png_match.group(1)
                    
                # We save it as {hero_slug}_avatar.png
                hero_slug = sanitize_slug(matched_hero)
                filename = f"{hero_slug}_avatar.png"
                dest_path = os.path.join(dest_dir, filename)
                
                matched_heroes[matched_hero] = (clean_url, dest_path)

    print(f"Matched {len(matched_heroes)} heroes. Starting downloads...")
    
    for hero, (url, dest_path) in matched_heroes.items():
        print(f"Downloading {hero} avatar from: {url}")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
            with urllib.request.urlopen(req, timeout=15) as response:
                with open(dest_path, 'wb') as f:
                    f.write(response.read())
            downloaded_count += 1
            print(f"  [OK] Saved to {os.path.basename(dest_path)}")
        except Exception as e:
            print(f"  [Error] Failed to download: {e}")
            
    print(f"\nSuccessfully downloaded {downloaded_count} hero avatars to: {dest_dir}")

if __name__ == "__main__":
    main()
