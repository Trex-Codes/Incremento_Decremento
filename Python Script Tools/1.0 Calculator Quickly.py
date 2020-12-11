# Codigo para hacer una calculadora 
# operaciones  basicas sin necesidad 
# de utilizar if & else

import operator 

action = {
	"+" : operator.add,
	"-" : operator.sub,
	"/" : operator.truediv,
	"*" : operator.mul,
}

# para utilizar 
print(action["+"](5, 5)) # 10