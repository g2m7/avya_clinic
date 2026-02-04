import os
from PIL import Image
from pathlib import Path

def convert_images_to_webp(directory):
    """
    Converts all PNG images in the specified directory to WebP format.
    """
    path = Path(directory)
    if not path.exists():
        print(f"Directory {directory} does not exist.")
        return

    print(f"Scanning {directory} for PNG images...")
    
    count = 0
    for file_path in path.glob("*.png"):
        img = Image.open(file_path)
        webp_path = file_path.with_suffix(".webp")
        
        print(f"Converting {file_path.name} to WebP...")
        img.save(webp_path, "WEBP", quality=90)
        count += 1
        
    print(f"Successfully converted {count} images to WebP.")

if __name__ == "__main__":
    SERVICES_DIR = "static/images/services"
    convert_images_to_webp(SERVICES_DIR)
