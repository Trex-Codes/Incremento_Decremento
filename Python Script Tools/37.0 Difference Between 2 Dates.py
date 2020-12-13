from datetime import date 

# Definimos mas fechas para comparar 
hoy = date(2020,12,12)
otra_fecha = date(2003,5,13)

# Realizamos el calculo e imprimimos la diferencia 
dif = otra_fecha - hoy 
print(dif.days)