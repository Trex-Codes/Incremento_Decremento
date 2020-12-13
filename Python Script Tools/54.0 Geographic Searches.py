# Importar GeoPy y cargar el objecto Nominatim 
from geopy.geocoders import Nominatim 
geolocator = Nominatim(user_agent="app_name")

# Introducir la direccion al buscar 
location = geolocator.geocode("175 5th Avenue NYC")

# Acceder a la direccion completa 
print(location.address)

# Acceder a cordenadas geograficas: latitud y longitud 
print((location. latitude, location.longitude))
(40.7410861, -73.9896297214625)

# mas datos 
print(location.raw)