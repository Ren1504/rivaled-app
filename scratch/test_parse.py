import os
import re
from bs4 import BeautifulSoup

def clean_html(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = text.replace('\n', ' ').strip()
    return text

file_path = r"C:\Users\vigne\.gemini\antigravity-ide\brain\a77c323b-5b08-4023-8187-e577d0697a25\.system_generated\steps\1602\content.md"

if not os.path.exists(file_path):
    print("File not found")
    exit()

with open(file_path, "r", encoding="utf-8") as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, "html.parser")

# Find Chatter section
chatter_header = soup.find(id="Chatter")
if chatter_header:
    print("Found Chatter header")
    # Find the next table after the header
    parent = chatter_header.find_parent(["h2", "h3"])
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
        print("Found Chatter table")
        rows = table.find_all("tr")
        active_condition = ""
        rowspan_left = 0
        
        chatter_quotes = []
        for row in rows:
            tds = row.find_all("td")
            if not tds:
                continue
            
            if len(tds) == 3:
                # First td is condition
                cond_td = tds[0]
                rowspan = int(cond_td.get("rowspan", 1))
                active_condition = clean_html(str(cond_td))
                rowspan_left = rowspan - 1
                quote = clean_html(str(tds[1]))
                chatter_quotes.append({"condition": active_condition, "quote": quote})
            elif len(tds) == 2:
                if rowspan_left > 0:
                    quote = clean_html(str(tds[0]))
                    chatter_quotes.append({"condition": active_condition, "quote": quote})
                    rowspan_left -= 1
                else:
                    cond_td = tds[0]
                    active_condition = clean_html(str(cond_td))
                    quote = clean_html(str(tds[1]))
                    chatter_quotes.append({"condition": active_condition, "quote": quote})
            elif len(tds) == 1:
                quote = clean_html(str(tds[0]))
                chatter_quotes.append({"condition": active_condition, "quote": quote})
                if rowspan_left > 0:
                    rowspan_left -= 1
        
        print(f"Parsed {len(chatter_quotes)} chatter quotes")
        for q in chatter_quotes[:5]:
            print(q)

# Find Interactions section
interact_header = soup.find(id="Interactions")
if interact_header:
    print("\nFound Interactions header")
    parent = interact_header.find_parent(["h2", "h3"])
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
        print("Found Interactions table")
        rows = table.find_all("tr")
        active_recipient = ""
        rowspan_left = 0
        
        interactions = []
        for row in rows:
            tds = row.find_all("td")
            if not tds:
                continue
            
            # Interactions row structure:
            # tds[0]: Recipient character name
            # tds[1]: Dialogue list (ul/li structure or simple text)
            if len(tds) == 3:
                recipient_td = tds[0]
                rowspan = int(recipient_td.get("rowspan", 1))
                active_recipient = clean_html(str(recipient_td))
                rowspan_left = rowspan - 1
                dialogue_td = tds[1]
            elif len(tds) == 2:
                if rowspan_left > 0:
                    dialogue_td = tds[0]
                    rowspan_left -= 1
                else:
                    recipient_td = tds[0]
                    active_recipient = clean_html(str(recipient_td))
                    dialogue_td = tds[1]
            elif len(tds) == 1:
                dialogue_td = tds[0]
                if rowspan_left > 0:
                    rowspan_left -= 1
            else:
                continue
                
            # Parse lines from dialogue_td
            lis = dialogue_td.find_all("li")
            if lis:
                for li in lis:
                    text = clean_html(str(li))
                    # Extract speaker and their line (format "Speaker: line")
                    match = re.match(r"^([^:]+):\s*(.*)$", text)
                    if match:
                        speaker = match.group(1).strip()
                        line = match.group(2).strip()
                        interactions.append({
                            "speaker": speaker,
                            "recipient": active_recipient,
                            "line": line
                        })
            else:
                text = clean_html(str(dialogue_td))
                interactions.append({
                    "speaker": "Rogue",  # Fallback to current character if no list
                    "recipient": active_recipient,
                    "line": text
                })
        
        print(f"Parsed {len(interactions)} interaction lines")
        for idx, inter in enumerate(interactions[:10]):
            print(f"{idx}: {inter['speaker']} -> {inter['recipient']}: {inter['line']}")
