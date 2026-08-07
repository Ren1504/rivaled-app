#!/usr/bin/env python3
import os
import sys
import re
import json
import time
import argparse
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup
import cloudscraper

# Global List of heroes matching marvelRivalsData.ts
HEROES_LIST = [
    "Adam Warlock", "Angela", "Black Cat", "Black Panther", "Black Widow",
    "Blade", "Captain America", "Cloak & Dagger", "Cyclops", "Daredevil",
    "Deadpool", "Devil Dinosaur", "Doctor Strange", "Elsa Bloodstone", "Emma Frost",
    "Gambit", "Groot", "Hawkeye", "Hela", "Hulk", "Human Torch", "Invisible Woman",
    "Iron Fist", "Iron Man", "Jeff the Land Shark", "Loki", "Luna Snow", "Magik",
    "Magneto", "Mantis", "Mister Fantastic", "Moon Knight", "Namor", "Peni Parker",
    "Phoenix", "Psylocke", "Rocket Raccoon", "Rogue", "Scarlet Witch", "Spider-Man",
    "Squirrel Girl", "Star-Lord", "Storm", "The Punisher", "The Thing", "Thor",
    "Ultron", "Venom", "White Fox", "Winter Soldier", "Wolverine"
]

def clean_html_text(text):
    if not text:
        return ""
    text = re.sub(r'<[^>]+>', '', text)
    text = text.replace('&nbsp;', ' ').replace('&amp;', '&').replace('\n', ' ').strip()
    text = text.replace('‘', "'").replace('’', "'").replace('“', '"').replace('”', '"')
    text = re.sub(r'\s+', ' ', text)
    return text

def sanitize_slug(name):
    return name.lower().strip() \
        .replace(' & ', '-and-') \
        .replace(' ', '-') \
        .replace('.', '') \
        .replace("'", "") \
        .replace('"', "")

def download_image(url, dest_path):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        with urllib.request.urlopen(req, timeout=15) as response:
            with open(dest_path, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        print(f"  Failed to download image {url}: {e}")
        return False

# ==========================================
# ABILITIES EXTRACTION
# ==========================================
def extract_abilities(hero_name, root_dir):
    print(f"\n=== EXTRACTING ABILITIES FOR {hero_name.upper()} ===")
    
    # 1. Fetch main page to find hero URL
    list_url = 'https://www.marvelrivals.com/heroes/index.html?heroId=0'
    print(f"Fetching hero list page from: {list_url}")
    try:
        req = urllib.request.Request(list_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=15) as response:
            html = response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching hero list page: {e}")
        return

    # Find hero detail URL and avatar image
    soup_list = BeautifulSoup(html, 'html.parser')
    hero_a = soup_list.find('a', attrs={'data-name': lambda x: x and x.lower() == hero_name.lower()})
    
    detail_url = None
    avatar_url = None
    hero_slug = sanitize_slug(hero_name)
    
    if hero_a:
        detail_url = hero_a.get('data-url')
        img_tag = hero_a.find('img')
        if img_tag and img_tag.get('src'):
            avatar_url = img_tag['src']
            
    if not detail_url:
        # Alt check flex match
        match_flex = re.search(r'data-name="' + re.escape(hero_name) + r'"[^>]*data-url="([^"]+)"', html, re.IGNORECASE) \
                     or re.search(r'data-url="([^"]+)"[^>]*data-name="' + re.escape(hero_name) + r'"', html, re.IGNORECASE)
        if match_flex:
            detail_url = match_flex.group(1)

    if not detail_url:
        print(f"Could not find detail page URL for hero '{hero_name}' on the official site.")
        print("Please check the spelling of the hero's name.")
        return

    # Download hero avatar if missing
    if avatar_url:
        avatar_path = os.path.join(root_dir, 'frontend', 'public', 'hero-icons', f"{hero_slug}_avatar.png")
        if not os.path.exists(avatar_path):
            print(f"Downloading hero avatar from: {avatar_url}")
            os.makedirs(os.path.dirname(avatar_path), exist_ok=True)
            download_image(avatar_url, avatar_path)
        else:
            print("Hero avatar already exists.")

    print(f"Found detail page URL: {detail_url}")
    try:
        req = urllib.request.Request(detail_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=15) as response:
            detail_html = response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching detail page: {e}")
        return

    soup = BeautifulSoup(detail_html, 'html.parser')
    table = soup.find('table', class_='table-imgs')
    if not table:
        table = soup.find('table')
        
    if not table:
        print("Could not find abilities table in detail page HTML.")
        return

    rows = table.find_all('tr')
    parsed_abilities = []
    
    current_ability = None
    hero_slug = sanitize_slug(hero_name)
    public_dir = os.path.join(root_dir, 'frontend', 'public', 'ability_images', hero_slug)
    os.makedirs(public_dir, exist_ok=True)
    
    for row in rows:
        tds = row.find_all('td', recursive=False)
        if not tds:
            tds = row.find_all('td')
            
        if len(tds) >= 3 and tds[0].get_text(strip=True).isdigit():
            # This is a new ability row
            type_str = tds[0].get_text(strip=True)
            # Skip variants (0), team-up abilities (3, 4)
            if type_str in ['0', '3', '4']:
                current_ability = None
                continue
                
            name_str = clean_html_text(str(tds[1]))
            img_tag = tds[2].find('img')
            img_url = img_tag['src'] if img_tag else ''
            
            if name_str and img_url:
                ability_slug = sanitize_slug(name_str)
                dest_file = f"{ability_slug}.png"
                dest_path = os.path.join(public_dir, dest_file)
                local_url = f"/ability_images/{hero_slug}/{dest_file}"
                
                print(f"Found Ability: {name_str}")
                print(f"  Icon URL: {img_url}")
                
                # Download image
                if not os.path.exists(dest_path):
                    print("  Downloading icon...")
                    download_image(img_url, dest_path)
                else:
                    print("  Icon already downloaded.")
                    
                current_ability = {
                    "name": name_str,
                    "slug": ability_slug,
                    "button": "Passive", # Default
                    "originalImgUrl": img_url,
                    "localImgUrl": local_url,
                    "properties": []
                }
                parsed_abilities.append(current_ability)
        elif len(tds) >= 2 and current_ability is not None:
            # Property row
            key = clean_html_text(str(tds[0]))
            val = clean_html_text(str(tds[1]))
            if key.lower() == 'key':
                current_ability['button'] = val
            else:
                current_ability['properties'].append({
                    "key": key,
                    "value": val
                })

    print(f"Successfully parsed {len(parsed_abilities)} abilities.")
    
    # Sync TS file
    ts_path = os.path.join(root_dir, 'frontend', 'src', 'data', 'marvelRivalsAbilities.ts')
    if os.path.exists(ts_path):
        with open(ts_path, 'r', encoding='utf-8') as f:
            ts_content = f.read()
            
        start_str = 'export const heroAbilitiesData: HeroAbilitiesDatabase = '
        start_idx = ts_content.find(start_str)
        if start_idx != -1:
            json_part = ts_content[start_idx + len(start_str):].strip().rstrip(';')
            try:
                db_data = json.loads(json_part)
                # Update
                db_data[hero_name.upper()] = parsed_abilities
                # Sort alphabetically by key
                sorted_db = {k: db_data[k] for k in sorted(db_data.keys())}
                
                new_ts_content = ts_content[:start_idx + len(start_str)] + json.dumps(sorted_db, indent=2) + ';\n'
                with open(ts_path, 'w', encoding='utf-8') as f:
                    f.write(new_ts_content)
                print(f"Updated and sorted {ts_path} successfully!")
            except Exception as e:
                print(f"Error parsing marvelRivalsAbilities.ts: {e}")
    else:
        print(f"Warning: marvelRivalsAbilities.ts not found at {ts_path}")

    # Sync heroAbilitiesData.json
    json_path = os.path.join(root_dir, 'frontend', 'src', 'data', 'heroAbilitiesData.json')
    if os.path.exists(json_path):
        try:
            with open(json_path, 'r', encoding='utf-8') as f:
                jsonData = json.load(f)
            jsonData[hero_name.upper()] = parsed_abilities
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(jsonData, f, indent=2)
            print(f"Updated {json_path} successfully!")
        except Exception as e:
            print(f"Error updating heroAbilitiesData.json: {e}")

# ==========================================
# QUOTES EXTRACTION
# ==========================================
def extract_quotes(hero_name, root_dir):
    print(f"\n=== EXTRACTING QUOTES FOR {hero_name.upper()} ===")
    
    # 1. Fetch Fandom Wiki page using cloudscraper
    scraper = cloudscraper.create_scraper(browser={
        'browser': 'chrome',
        'platform': 'windows',
        'mobile': False
    })
    
    url_name = urllib.parse.quote(hero_name.replace(" ", "_"))
    url = f"https://marvelrivals.fandom.com/wiki/{url_name}/Quotes"
    
    print(f"Fetching quotes from: {url}")
    try:
        resp = scraper.get(url, timeout=25)
        if resp.status_code == 404:
            print(f"Quotes page not found (404) on Fandom for {hero_name}")
            return
        if resp.status_code != 200:
            print(f"Failed to fetch quotes: HTTP {resp.status_code}")
            return
    except Exception as e:
        print(f"Error fetching Fandom wiki: {e}")
        return

    soup = BeautifulSoup(resp.text, 'html.parser')
    main_content = soup.find('div', {'class': 'mw-parser-output'})
    if not main_content:
        print("No main Fandom content parser output div found.")
        return

    EXCLUDED_SECTIONS = [
        'points of interest', 'mission-specific', 'easter eggs', 'unused', 'removed', 'call-outs', 'communication'
    ]

    def is_valid_dialogue(q_text):
        q_clean = q_text.strip()
        if len(q_clean) < 4:
            return False
        # Exclude common noise sounds and audio URLs
        if re.match(r'^(ugh|aah|gah|paf|pew|thwip|oof|grr|ha|haha|mrrr)!*$', q_clean, re.IGNORECASE):
            return False
        if 'specific maps' in q_clean.lower() or 'voice actress' in q_clean.lower() or 'audio' in q_clean.lower():
            return False
        if q_clean.startswith('http://') or q_clean.startswith('https://') or q_clean.startswith('//') or q_clean.startswith('File:'):
            return False
        if 'fandom.com/wiki/File:' in q_clean or '.ogg' in q_clean.lower() or '.wav' in q_clean.lower():
            return False
        return True

    quotes_data = []
    
    # Simple table-based parsing
    tables = main_content.find_all('table', {'class': 'article-table'})
    for table in tables:
        prev_h = table.find_previous(['h2', 'h3'])
        sec_name = prev_h.get_text(strip=True).replace('[edit]', '').replace('[source]', '') if prev_h else "Chatter"
        
        if any(ex in sec_name.lower() for ex in EXCLUDED_SECTIONS):
            continue

        rows = table.find_all('tr')
        current_condition = sec_name

        for row in rows:
            tds = row.find_all(['td', 'th'])
            if not tds or tds[0].name == 'th':
                continue

            if len(tds) >= 2:
                col0 = tds[0].get_text().strip()
                col1 = tds[1].get_text().strip()

                if col0 and len(col0) < 60 and not col0.startswith('http'):
                    col0_clean = ' '.join(col0.split())
                    if col0_clean and not col0_clean.startswith('Translation:'):
                        current_condition = col0_clean

                # Also search for links/lis inside col1
                lis = tds[1].find_all('li')
                lines = [li.get_text().strip() for li in lis] if lis else col1.split('\n')
                
                for line in lines:
                    line = line.strip()
                    if not line or line.startswith('Translation:') or line.startswith('Audio'):
                        continue
                    
                    # Clean line from brackets, parentheses, speaker prefixes
                    line_clean = re.sub(r'\s*\([^)]*\)', '', line).strip('"`“’ ')
                    line_clean = re.sub(r'\[.*?\]', '', line_clean).strip()
                    
                    # Strip speaker prefix (e.g. "Speaker: Quote" or "Speaker Name - Quote")
                    line_clean = re.sub(r'^[A-Za-z0-9\s\.\-—\']+:\s*', '', line_clean).strip()
                    
                    if is_valid_dialogue(line_clean):
                        clue = current_condition if current_condition else sec_name
                        # Exclude map-specific clues
                        if 'specific maps' in clue.lower():
                            continue
                        # Anonymize hero name in clue
                        clue_clean = re.sub(re.escape(hero_name), 'Hero', clue, flags=re.IGNORECASE).strip()
                        
                        is_interaction = "interaction" in sec_name.lower() or "interaction" in clue_clean.lower()
                        
                        quotes_data.append({
                            "quote": line_clean,
                            "character": hero_name,
                            "clue": clue_clean,
                            "type": "interaction" if is_interaction else "chatter"
                        })

    # Deduplicate
    unique_quotes = []
    seen = set()
    for q in quotes_data:
        key = (q['quote'].lower(), q['clue'])
        if key not in seen:
            seen.add(key)
            unique_quotes.append(q)

    print(f"Extracted {len(unique_quotes)} clean, unique quotes.")
    
    # Sync marvelRivalsQuotes.ts
    ts_path = os.path.join(root_dir, 'frontend', 'src', 'data', 'marvelRivalsQuotes.ts')
    if os.path.exists(ts_path):
        with open(ts_path, 'r', encoding='utf-8') as f:
            ts_content = f.read()
            
        start_str = 'export const heroQuotes: HeroQuote[] = '
        start_idx = ts_content.find(start_str)
        if start_idx != -1:
            json_part = ts_content[start_idx + len(start_str):].strip().rstrip(';')
            try:
                db_quotes = json.loads(json_part)
                # Filter out old quotes for this hero
                db_quotes = [q for q in db_quotes if q['character'].lower() != hero_name.lower()]
                # Append new ones
                db_quotes.extend(unique_quotes)
                # Sort alphabetically by character, then by quote
                sorted_quotes = sorted(db_quotes, key=lambda x: (x.get('character', ''), x.get('quote', '')))
                
                new_ts_content = ts_content[:start_idx + len(start_str)] + json.dumps(sorted_quotes, indent=2) + ';\n'
                with open(ts_path, 'w', encoding='utf-8') as f:
                    f.write(new_ts_content)
                print(f"Updated and sorted {ts_path} with {len(unique_quotes)} clean quotes successfully!")
            except Exception as e:
                print(f"Error parsing marvelRivalsQuotes.ts: {e}")
    else:
        print(f"Warning: marvelRivalsQuotes.ts not found at {ts_path}")

# ==========================================
# MAIN EXECUTION ENTRY
# ==========================================
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Unified Marvel Rivals Hero Data Scraper & Extractor")
    parser.add_argument('--hero', type=str, required=True, help="Hero Name (e.g. 'Jubilee')")
    parser.add_argument('--mode', type=str, choices=['both', 'abilities', 'quotes'], default='both',
                        help="Extraction mode: 'abilities' only, 'quotes' only, or 'both'")
    
    args = parser.parse_args()
    
    # Normalize hero name case from the global list if present
    normalized_name = args.hero
    for h in HEROES_LIST:
        if args.hero.lower() == h.lower():
            normalized_name = h
            break
            
    # Resolve project root dir
    scripts_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.abspath(os.path.join(scripts_dir, '..'))
    
    print(f"Project root directory: {root_dir}")
    print(f"Selected Hero Name: {normalized_name}")
    print(f"Selected Mode: {args.mode}")
    
    start_time = time.time()
    
    if args.mode in ['both', 'abilities']:
        extract_abilities(normalized_name, root_dir)
        
    if args.mode in ['both', 'quotes']:
        extract_quotes(normalized_name, root_dir)
        
    print(f"\nExecution finished in {time.time() - start_time:.2f} seconds.")
