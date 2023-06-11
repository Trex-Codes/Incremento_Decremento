from rembg import remove 
from PIL import Image 
input_path = 'cl.jpg'
output_path = 'output.jpg'
input = image.open(input_path)
output_ = remove(input)
output.save(output_path)
