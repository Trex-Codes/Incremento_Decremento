import calendar 

# solicitar el año y mes al user 
año = int(input("Escribe el año: "))
mes = int(input("Escribe el mes: "))

# Imprimir el calendario como texto 
print(calendar.month(año, mes))