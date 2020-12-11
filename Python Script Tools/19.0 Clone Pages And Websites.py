# Importar save_website de pywebcopy
from pywebcopy import save_website

# Asignar ciento ajustes de descarga 
kwargs = {'project_name':'some-fancy-name'}

# Indicar URL y carpeta de destino 
save_website(
	url='https://hackertyper.net/')
	project_folder="path/to/downloads",
	**kwargs
)