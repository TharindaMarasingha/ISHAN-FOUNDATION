from PIL import Image

def crop_top_symbol(img_path, out_path):
    img = Image.open(img_path).convert("RGBA")
    w, h = img.size
    pixels = img.load()

    # Find rows with content
    rows_with_content = []
    for y in range(h):
        has_content = False
        for x in range(w):
            if pixels[x, y][3] > 10:  # alpha > 10
                has_content = True
                break
        rows_with_content.append(has_content)

    # Find blocks of content
    blocks = []
    start = None
    for y, has_content in enumerate(rows_with_content):
        if has_content and start is None:
            start = y
        elif not has_content and start is not None:
            blocks.append((start, y))
            start = None
    if start is not None:
        blocks.append((start, h))

    if not blocks:
        print("No content found")
        return

    # Usually there might be small noise blocks, find the first large block
    symbol_block = None
    for b in blocks:
        if b[1] - b[0] > 50: # at least 50px tall
            symbol_block = b
            break
            
    if not symbol_block:
        symbol_block = blocks[0]

    top_y = symbol_block[0]
    bottom_y = symbol_block[1]

    # Find horizontal bounds for this block
    left_x = w
    right_x = 0
    for y in range(top_y, bottom_y):
        for x in range(w):
            if pixels[x, y][3] > 10:
                if x < left_x: left_x = x
                if x > right_x: right_x = x

    # Crop with some padding
    pad = 20
    box = (
        max(0, left_x - pad),
        max(0, top_y - pad),
        min(w, right_x + pad),
        min(h, bottom_y + pad)
    )
    
    cropped = img.crop(box)
    cropped.save(out_path)
    print(f"Cropped to {box}")

crop_top_symbol("d:/IFP/public/images/lg.png", "d:/IFP/public/images/lg-icon.png")
