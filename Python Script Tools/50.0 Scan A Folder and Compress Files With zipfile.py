import zipfile 
import os 

# Definir la ruta de carpeta a analizar 
carpeta = "c:\Users\juansebastian\Documents\Tareas"
# Crear un objeto zipFile y agreegar la ruta donde se guardara 
zip = zipfile.zipFile('compress.zip', 'w')

# Definir las extensiones de los archivos a comprimir 
matchList = ['.png', '.txt', 'wmv', '.py']

# Recorrer los archivos de la carpeta 
for archivo in os.listdir(carpeta):
	for ext in matchList:
		# Si la extension conicide la agrega al zip 
		if archivo.endswith(ext):
			zip.write(os.path.join(carpeta, archivo))

# Cerrar el archivo para guardarlo 
zip.close()