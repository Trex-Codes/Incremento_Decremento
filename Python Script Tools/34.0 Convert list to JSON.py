import json 
# Creamos o importamos la lista
lenguajes = ['Python', 'java', 'C++', 'PHP']

# Usamos json.dummps para convertir 
datos_json = json.dummps(lenguajes)

# Imprimir el json con los datos de la lsita 
print(datos_json)
print(type(datos_json))