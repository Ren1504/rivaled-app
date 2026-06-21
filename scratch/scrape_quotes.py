import os
import re
import json
import cloudscraper
from bs4 import BeautifulSoup
import urllib.parse
import time

# List of heroes matching marvelRivalsData.ts
heroes_list = [
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

# Initialize scraper session globally to share cookies and use a real Chrome fingerprint
scraper = cloudscraper.create_scraper(browser={
    'browser': 'chrome',
    'platform': 'windows',
    'mobile': False
})

def clean_text(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = text.replace('\n', ' ').strip()
    text = text.replace('‘', "'").replace('’', "'").replace('“', '"').replace('”', '"')
    text = re.sub(r'\s+', ' ', text)
    return text

def parse_hero_quotes(hero_name):
    url_name = hero_name.replace(" ", "_")
    url_name = url_name.replace("&", "%26")
    url = f"https://marvelrivals.fandom.com/wiki/{url_name}/Quotes"
    
    print(f"Fetching quotes for {hero_name} from: {url}")
    try:
        resp = scraper.get(url, timeout=20)
        if resp.status_code == 404:
            print(f"Quotes page not found (404) for {hero_name}")
            return [], []
        if resp.status_code != 200:
            print(f"Failed to fetch {hero_name} quotes: HTTP {resp.status_code}")
            return [], []
    except Exception as e:
        print(f"Error fetching {hero_name} quotes: {e}")
        return [], []
        
    soup = BeautifulSoup(resp.text, "html.parser")
    
    chatter_quotes = []
    interactions = []
    
    # 1. Parse Chatter Section
    chatter_header = soup.find(id="Chatter")
    if chatter_header:
        parent = chatter_header.find_parent(["h2", "h3"])
        if parent:
            table = None
            curr = parent.next_sibling
            while curr:
                if curr.name == "table":
                    table = curr
                    break
                if curr.name in ["h2", "h3"]:
                    break
                curr = curr.next_sibling

            if table:
                rows = table.find_all("tr")
                active_condition = ""
                rowspan_left = 0
                
                for row in rows:
                    tds = row.find_all("td")
                    if not tds:
                        continue
                    
                    if len(tds) == 3:
                        cond_td = tds[0]
                        rowspan = int(cond_td.get("rowspan", 1))
                        active_condition = clean_text(str(cond_td))
                        rowspan_left = rowspan - 1
                        quote = clean_text(str(tds[1]))
                        chatter_quotes.append({
                            "quote": quote,
                            "character": hero_name,
                            "clue": active_condition,
                            "type": "chatter"
                        })
                    elif len(tds) == 2:
                        if rowspan_left > 0:
                            quote = clean_text(str(tds[0]))
                            chatter_quotes.append({
                                "quote": quote,
                                "character": hero_name,
                                "clue": active_condition,
                                "type": "chatter"
                            })
                            rowspan_left -= 1
                        else:
                            cond_td = tds[0]
                            active_condition = clean_text(str(cond_td))
                            quote = clean_text(str(tds[1]))
                            chatter_quotes.append({
                                "quote": quote,
                                "character": hero_name,
                                "clue": active_condition,
                                "type": "chatter"
                            })
                    elif len(tds) == 1:
                        quote = clean_text(str(tds[0]))
                        chatter_quotes.append({
                            "quote": quote,
                            "character": hero_name,
                            "clue": active_condition,
                            "type": "chatter"
                        })
                        if rowspan_left > 0:
                            rowspan_left -= 1
                        
    # 2. Parse Interactions Section
    interact_header = soup.find(id="Interactions")
    if interact_header:
        parent = interact_header.find_parent(["h2", "h3"])
        if parent:
            table = None
            curr = parent.next_sibling
            while curr:
                if curr.name == "table":
                    table = curr
                    break
                if curr.name in ["h2", "h3"]:
                    break
                curr = curr.next_sibling

            if table:
                rows = table.find_all("tr")
                active_recipient = ""
                rowspan_left = 0
                
                for row in rows:
                    tds = row.find_all("td")
                    if not tds:
                        continue
                    
                    if len(tds) == 3:
                        recipient_td = tds[0]
                        rowspan = int(recipient_td.get("rowspan", 1))
                        active_recipient = clean_text(str(recipient_td))
                        rowspan_left = rowspan - 1
                        dialogue_td = tds[1]
                    elif len(tds) == 2:
                        if rowspan_left > 0:
                            dialogue_td = tds[0]
                            rowspan_left -= 1
                        else:
                            recipient_td = tds[0]
                            active_recipient = clean_text(str(recipient_td))
                            dialogue_td = tds[1]
                    elif len(tds) == 1:
                        dialogue_td = tds[0]
                        if rowspan_left > 0:
                            rowspan_left -= 1
                    else:
                        continue
                        
                    lis = dialogue_td.find_all("li")
                    if lis:
                        for li in lis:
                            text = clean_text(str(li))
                            match = re.match(r"^([^:]+):\s*(.*)$", text)
                            if match:
                                speaker = match.group(1).strip()
                                line = match.group(2).strip()
                                # Recipient logic
                                recipient = hero_name if speaker.lower() == active_recipient.lower() or speaker.lower() not in ["adam warlock", "angela", "black cat", "black panther", "black widow", "blade", "captain america", "cloak & dagger", "cyclops", "daredevil", "deadpool", "devil dinosaur", "doctor strange", "elsa bloodstone", "emma frost", "gambit", "groot", "hawkeye", "hela", "hulk", "human torch", "invisible woman", "iron fist", "iron man", "jeff the land shark", "loki", "luna snow", "magik", "magneto", "mantis", "mister fantastic", "moon knight", "namor", "peni parker", "phoenix", "psylocke", "rocket raccoon", "rogue", "scarlet witch", "spider-man", "squirrel girl", "star-lord", "storm", "the punisher", "the thing", "thor", "ultron", "venom", "white fox", "winter soldier", "wolverine"] else active_recipient
                                
                                speaker_normalized = speaker
                                for h in heroes_list:
                                    if speaker.lower() == h.lower():
                                        speaker_normalized = h
                                        break
                                
                                recipient_normalized = recipient
                                for h in heroes_list:
                                    if recipient.lower() == h.lower():
                                        recipient_normalized = h
                                        break
                                        
                                interactions.append({
                                    "quote": line,
                                    "character": speaker_normalized,
                                    "clue": recipient_normalized,
                                    "type": "interaction"
                                })
                    else:
                        text = clean_text(str(dialogue_td))
                        interactions.append({
                            "quote": text,
                            "character": hero_name,
                            "clue": active_recipient,
                            "type": "interaction"
                        })
                    
    print(f"Parsed {len(chatter_quotes)} chatter and {len(interactions)} interactions for {hero_name}")
    return chatter_quotes, interactions

def main():
    all_quotes = []
    
    # Scrape all heroes
    for idx, hero in enumerate(heroes_list):
        chatter, interact = parse_hero_quotes(hero)
        all_quotes.extend(chatter)
        all_quotes.extend(interact)
        # Add a tiny delay to be polite to the server
        time.sleep(0.5)
        
    print(f"\nTotal quotes scraped: {len(all_quotes)}")
    
    # Save as JSON and TypeScript file
    out_dir = r"d:\Flutter\game ts\rivaled-app\frontend\src\data"
    os.makedirs(out_dir, exist_ok=True)
    
    ts_file = os.path.join(out_dir, "marvelRivalsQuotes.ts")
    
    # Filter empty, redundant, or map-specific quotes
    filtered_quotes = []
    seen = set()
    for q in all_quotes:
        quote_text = q["quote"].strip()
        if not quote_text or len(quote_text) < 4:
            continue
        clue_text = (q.get("clue") or "").lower()
        if "specific maps" in clue_text:
            continue
        key = (q["character"].lower(), quote_text.lower())
        if key not in seen:
            seen.add(key)
            filtered_quotes.append(q)
            
    print(f"Filtered down to {len(filtered_quotes)} unique quotes")
    
    # Write to TypeScript file
    with open(ts_file, "w", encoding="utf-8") as f:
        f.write("// Marvel Rivals Character Quotes Database\n")
        f.write("// Auto-generated from Fandom Wiki Chatter & Interactions pages\n\n")
        f.write("export interface HeroQuote {\n")
        f.write("  quote: string;\n")
        f.write("  character: string;\n")
        f.write("  clue: string; // recipient character for interactions, or trigger condition for chatter\n")
        f.write("  type: 'chatter' | 'interaction';\n")
        f.write("}\n\n")
        f.write("export const heroQuotes: HeroQuote[] = ")
        f.write(json.dumps(filtered_quotes, indent=2))
        f.write(";\n")
        
    print(f"Successfully saved quotes to {ts_file}")

if __name__ == "__main__":
    main()
