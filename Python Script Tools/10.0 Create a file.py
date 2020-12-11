# Crea un archivo llamado "archivo.txt":
# "X" Devolvera un error si el archivo existe 

f =  open("archivo.txt", "x")
# Resultado: se crea un nuevo archivo vacio.

# Crea un nuevo archivo si no existe:
# "w" sobrescribira cualquier contenido existente
f = open("vida.txt", "w")