import json
import re

with open('frontend/src/data/marvelRivalsData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the list of heroes using regex
match = re.search(r'export const heroes:\s*Hero\[\]\s*=\s*(\[.*?\]);', content, re.DOTALL)
if match:
    # Use clean JSON evaluation
    raw_array = match.group(1)
    # Remove trailing commas and clean up keys for python literal eval
    # Replace comments or TS formatting if any
    # Since it is a valid JS/TS array literal, let's parse using python's ast.literal_eval
    import ast
    # Replace null with None, true with True, false with False
    raw_array_clean = raw_array.replace('null', 'None').replace('true', 'True').replace('false', 'False')
    # Remove TypeScript comments if any
    raw_array_clean = re.sub(r'//.*', '', raw_array_clean)
    heroes = ast.literal_eval(raw_array_clean)
    for h in heroes:
        print(f"\"{h['name']}\": {h['comicDebutYear']},")
else:
    print("No match found")
