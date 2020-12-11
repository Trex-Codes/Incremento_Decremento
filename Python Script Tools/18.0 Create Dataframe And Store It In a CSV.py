import pandas as pd 

# Crear diccionario donde key sera columna a crear 
# y su valuela informacion de cada columna 

data = {'paises': ['Mexico', 'España', 'Estados Unidos'],
		'Ciudades': ['Monterrey,' 'Madrid', 'Nueva York'],
		'Casos': [4291, 3829, 10283]}

# Crear un DataFrame pasando el diccioario y
# señalizar las columnas creadas 
df = pd.DataFrame(data, columns=['paises', 'Ciudades', 'Casos'])

# Imprimir la info
print(df)

# Almacenar en archivo CSV 
df.to_csv('myDataFrame.csv')