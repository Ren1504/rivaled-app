from PIL import Image

def crop_transparent(image_path):
    img = Image.open(image_path)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    bbox = img.getbbox()
    if bbox:
        cropped = img.crop(bbox)
        print(f"Original size: {img.size} -> Cropped size: {cropped.size} for {image_path}")
        cropped.save(image_path)

crop_transparent('frontend/public/rivaled_logo.png')
crop_transparent('frontend/public/logo.png')
crop_transparent('frontend/src/assets/logo.png')
crop_transparent('frontend/src/assets/rivaled_logo.png')
