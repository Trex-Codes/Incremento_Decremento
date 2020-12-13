import pyPDF2 
# Cargar el pdf original y el que contiene la marca de agua 
pdf_original = open('original.pdf', 'rb')
pdfwatermark = pyPDF2.pdfFileReader(open('marca_agua.pdf', 'rb'))
pdfReader = pyPDF2.pdfFileReader(pdf_original)

# Fusionar la primera pagina de cada documento 
FirstPage = pdfReader.getPage(0)
FirstPage.mergePage(pdfwatermark.getPage(0))

# guardar la pagina fusionada en un objeto pdfFileWriter
pdfWriter = pyPDF2.pdfFileWriter()
pdfWriter.addPage(FirstPage)

# Agreegar el contenido restante del PDF al original 
for pageNum in range(1, pdfReader.numPages):
	pageObj = pdfReader.getpage(pageNum)
	pdfWriter.addPage(pageObj)

# Guardar y cerrar archivos 
resultPdfFile = open('watermarkedPDF.pdf', 'wb')
pdfWriter.write(resultPdfFile)
pdf_original.close()
resultPdfFile.close()