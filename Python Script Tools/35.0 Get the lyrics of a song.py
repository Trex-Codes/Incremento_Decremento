from PyLirics import * 

# Realizar Busqueda de album por autor 
albums = PyLirics.getAlbums(singer='eminem')
for a in albums:
	print(a)

# Obtener la letra de una cancion 
print(PyLirics.getLyrics('Taylor Swift','Blank Space'))