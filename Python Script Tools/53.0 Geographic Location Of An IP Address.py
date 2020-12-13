# Importar geoip2 
import geoip2.database 

# Cargar la base de datos 
reader = geoip2.database.Reader('/path/to/
GeoLite2-City.mmdb')

# Obtener la ubicacion geografica con la IP
response = reader.city('123.201.171.134')

# Recuperar toda la informacion 
print(response.country.iso_code)
print(response.country.name)
print(response.postal.code)
print(response.subdivisions.most_specific.name)
print(response.city.name)
print(response.location.latitude)
print(response.longitude)