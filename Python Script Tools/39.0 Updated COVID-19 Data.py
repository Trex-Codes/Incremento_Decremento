# Instalacion PIP: pip install COVID19Py
import COVID19Py
covid19 = COVID19Py.COVID19()

# Informacion por ubicaciones 
location = covid19.getLocationByCountryCode("US")
#Recuperar Informacion Global
data = covid19.getAll()

#salida 
{
	"Confirmed": 512,
	"Deaths": 16,
	"Recovered": 1024
}