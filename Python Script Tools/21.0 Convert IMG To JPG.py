form PIL import Image 

# Cargar imagen a convertir 
imagen = 'chart.png'
im = Image.open(imagen)

# Tranformar a formato RGB
rgb_im = im.conver('RGB')

# Guardar 
rgb_im.save('Convert.jpg')