# Instalar pip insall geocoder 
import geocoder 

# Obtener la ubicacion actual
myloc = geocoder.ip('me')

# Acceder a mas datos 
print(myloc)