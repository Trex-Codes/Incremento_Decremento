# Importar el paquete
from docx2pdf import convert

# Convertimos directamente 
convert('Input.docx') 
# Definir PDF de salida 
convert('Input.docx', 'output.pdf')
# O tambien convertir todo el contenido de una carpeta 
convert("My_docx_folder/")