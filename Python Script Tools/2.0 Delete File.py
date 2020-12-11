import os 

# Comprueba de la existencia del archivo
if os.path.exists("saludos.bat"):
	os.remove("maincra.bat")
else:
	print("El archivo no existe")

# ----- BORRAR DE FORMA DEFINITA -----

# para eliminar archivo, se importa el 
# modulo del SO

# os.remove("saludos.bat")