# abre el archivo " " , y agregue contenido al archivo:

f = open("maincra.txt", "a")
f.write("Aqui agregas el contenido")
f.close()

f = open("archivo.txt", "r")
print(f.read())