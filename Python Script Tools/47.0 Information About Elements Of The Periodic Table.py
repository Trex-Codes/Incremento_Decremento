# Importar elementos por su nombre 
from periodictable import hydrogen 
# Importar solamnente simbolo 
from periodictable import H,B,Cu,Ni

# Informacion del elemento quimico 
print("H mass %s %s"%(hydrogen.mass, 
hydrogen.mass_units))

# Todos los elementos de la tabla 
for el in periodictable.elements:
	print("%s %s"%(el.symbol,el.name))