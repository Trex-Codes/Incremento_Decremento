import datetime 

ahora = datetime.datetime.now()
print(ahora)

# Fecha y hora formateada 
print(ahora.strftime('%d/%m/%y %H:%M:%S'))