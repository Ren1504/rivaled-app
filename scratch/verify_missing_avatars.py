import os

# Target heroes list
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

downloaded = os.listdir(r"d:\Flutter\game ts\rivaled-app\new_avatars")
downloaded_slugs = [f.replace("_avatar.png", "") for f in downloaded]

missing = []
for h in HEROES_LIST:
    slug = sanitize_slug(h)
    if slug not in downloaded_slugs:
        missing.append(h)

print(f"Missing {len(missing)} heroes:")
for m in missing:
    print(f"  - {m}")
