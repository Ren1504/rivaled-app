import sys
from PIL import Image

def process_logo(src_path):
    img = Image.open(src_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # If the pixel is dark/black (R < 35, G < 35, B < 35), make it transparent
        if item[0] < 35 and item[1] < 35 and item[2] < 35:
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)

    # Trim transparent bounding box
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    dests = [
        'frontend/public/rivaled_logo.png',
        'frontend/public/logo.png',
        'frontend/src/assets/logo.png',
        'frontend/src/assets/rivaled_logo.png'
    ]

    for d in dests:
        img.save(d)
        print(f"Saved processed transparent logo ({img.size[0]}x{img.size[1]}) to {d}")

if __name__ == "__main__":
    src = r"C:\Users\vigne\.gemini\antigravity-ide\brain\a77c323b-5b08-4023-8187-e577d0697a25\media__1784751026713.png"
    process_logo(src)
