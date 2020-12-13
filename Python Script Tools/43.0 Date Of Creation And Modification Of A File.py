import os.path, time 

nombre_archivo = 'archivo.txt'
# Obtener la fecha de creacion 
print('Fecha Creacion:
	{}'.format(time.ctime(os.path.getctime(nombre_archivo))))

# Obtener la fecha de modificacion
print('Fecha modificacion:
	{}'.format(time.ctime(os.path.getmtime(nombre_archivo))))