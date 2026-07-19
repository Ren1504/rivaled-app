import re

ts_file_path = "d:/Flutter/game ts/rivaled-app/frontend/src/data/marvelRivalsAbilities.ts"

with open(ts_file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Helper to sanitize hero names for slugs
def sanitize_hero(name):
    return name.lower().replace(" & ", "-and-").replace(" ", "-").replace(".", "").replace("'", "")

def convert_paths(content):
    lines = content.split('\n')
    current_hero_slug = None
    updated_lines = []
    
    hero_pattern = re.compile(r'^  "([^"]+)":\s*\[')
    slug_pattern = re.compile(r'^\s*"slug":\s*"([^"]+)"')
    local_img_pattern = re.compile(r'^(\s*"localImgUrl":\s*")[^"]*(".*)$')
    
    current_ability_slug = None
    
    for line in lines:
        hero_match = hero_pattern.match(line)
        if hero_match:
            hero_name = hero_match.group(1)
            current_hero_slug = sanitize_hero(hero_name)
            
        slug_match = slug_pattern.match(line)
        if slug_match:
            current_ability_slug = slug_match.group(1)
            
        img_match = local_img_pattern.match(line)
        if img_match and current_hero_slug and current_ability_slug:
            prefix = img_match.group(1)
            suffix = img_match.group(2)
            imagekit_url = f"https://ik.imagekit.io/veiuag1gp/ability_images/{current_hero_slug}/{current_ability_slug}.png"
            line = f"{prefix}{imagekit_url}{suffix}"
            
        updated_lines.append(line)
        
    return '\n'.join(updated_lines)

new_content = convert_paths(content)

with open(ts_file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Successfully updated marvelRivalsAbilities.ts with ImageKit paths!")
