from PIL import Image

def remove_background(img_path, out_path):
    try:
        img = Image.open(img_path)
        img = img.convert("RGBA")
        datas = img.getdata()

        newData = []
        # get the color of the top-left pixel to guess the background color
        bg_color = datas[0]
        
        # A simple tolerance
        def is_bg(pixel, bg, tol=40):
            return all(abs(pixel[i] - bg[i]) < tol for i in range(3))
            
        for item in datas:
            if is_bg(item, bg_color):
                newData.append((255, 255, 255, 0)) # transparent
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(out_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

remove_background("d:/IFP/public/images/lg.jpg", "d:/IFP/public/images/lg.png")
