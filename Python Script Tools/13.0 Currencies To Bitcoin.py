from forex_python.converter import CurrencyRates
c = CurrencyRates()

c.get_rates('USD') # ulimos cambios de monedas 
c.get_rate('USD', 'INR') # Tasa de conversion de moneda a otra 

# convertir una cantidad de una moneda a otra 
c.convert('USD', 'INR', 10)

# Obtener el precio de Bitcoin
b = BtcConverter()
b.get_latest_price('USD')