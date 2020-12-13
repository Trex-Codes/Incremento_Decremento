import openweather 
from datetime import datetime
ow = openweather.openweather()
# Obtener las estaciones metereologicas cercanas 
stations = ow.find_stations_near(
	7.0, # Longitud
	50.0, # Altitud
	100 # Radio en Km
)

# Estado del tiempo usando el ID de la estacion 
print(ow.get_weather(4885))

# fechas 
start_date = datetime(2013,9,10)
end_date = datetime(2013, 9, 15)

# Estado del tiempo en intervalo diario 
print(ow.get_historic_weather(4885, start_date, end_date))
print(ow.get_historic_weather(4885, start_date, end_date, "day"))