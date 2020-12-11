# Abra el archivo " ", y sobrescribe el contenido:

f = open("maincra.txt", 'w')
f.write("contenido")
f.close()

f = open("maincra.txt", "r")
print(f.read())