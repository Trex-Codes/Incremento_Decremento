import PyPDF2

# Cargamos el documento PDF 
pdfFileObj = open('archivo_pdf.pdf', 'rb')

# Abrimos el Documento PDF con PyPDF2
pdfReader = PyPDF2.pdfFileReader(pdfFileObj)

# Accedder a datos del PDF, numero de paginas, encriptado o no
# Informacion general del documento 
pdfReader.numPages
pdfReader.isEncrypted
pdfReader.documentInfo

# Leer contenido de una pagina del PDF, seleccionarla segun su 
# posicion 
pageObj = pdfReader.getPage(150)

# Extraer el texto 
print(pageObj.extractText())