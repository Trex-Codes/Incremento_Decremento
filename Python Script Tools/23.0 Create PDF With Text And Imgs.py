# Importar el paquete paPDF 
import paPDF 

# Iniciar la creacion del PDF definiendo la ruta
with paPDF("test.pdf") as pdf:
	# Añadir texto en cordenadas especificas 
	pdf.addText(40,290,'Hello World!')
	pdf.addPage()

# Añadir imagenes al PDF 
pdf.addimage('lena.jpg', 10, 10, 100, 100)