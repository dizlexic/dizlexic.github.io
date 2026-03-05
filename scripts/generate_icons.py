from PIL import Image, ImageDraw
import os

def create_placeholder_icon(name, color, size=(64, 64)):
    """Creates a simple placeholder PNG icon."""
    img = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Draw a simple circle as a placeholder
    draw.ellipse([5, 5, size[0]-5, size[1]-5], fill=color)

    # Add a simple 'T' for terminal
    if name == 'terminal-icon':
        draw.text((25, 15), "T", fill="black")

    output_dir = 'src/assets/images'
    os.makedirs(output_dir, exist_ok=True)
    img.save(os.path.join(output_dir, f'{name}.png'))
    print(f"Generated {name}.png")

if __name__ == "__main__":
    try:
        create_placeholder_icon('terminal-icon', '#00ff00')
        create_placeholder_icon('folder-icon', '#1e90ff')
    except Exception as e:
        print(f"Error generating icons: {e}")
