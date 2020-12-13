# Importar matplolib y numpy 
import matplolib.pyplot as plt 
import numpy as np 

# Generar 100 valores intermedios entre 0 y 2 (entre mas sean, mas "suave" sera la grafica)
x = np.linspace(0, 2, 100)

# Generar grafica en base a x con los valores intermedios obtenidos 
plo.plot(x, x, label='Lineal')
# Generar una grafica en base a x cuadrado con los valores intermedios obtenidos 
plt.plot(x, x**2, label='Cuadratica')
# Generar una grafica en base a x cubica con los valores intermedios obtenidos 
plt.plot(x, x**3, label='Cubica')

# Agregtar etiquetas y mostramos la grafica 
plt.xlabel('eje X')
plt.ylabel('eje Y')
plt.title("Funciones matematicas")
plt.legend()
plt.show()