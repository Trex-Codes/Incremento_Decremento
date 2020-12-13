# Instalacion desde PIP: pip install pdf2docx
from pdf2docx import parse 

# Definir la ruta de enttrada y salida de archivos 
pdf_file = '/path/to/sample.pdf'
docx_file = 'path/to/sample.docx'

# Convertir el pdf a docx 
parse(pdf_file, docx_file, start=0, end=1)