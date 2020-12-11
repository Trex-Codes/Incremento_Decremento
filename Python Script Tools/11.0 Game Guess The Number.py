#Este es un juego de adivinar el numero
import random 
intentos = 0
print('Hola! Cual es tu nombre?')
nombre = input()
numero = random.randint(1, 20)
print('Bueno, '+nombre+', piensa un numero entre 1 y 20.')
while intentos < 6:
	print('Adivinalo! Tienes 6 intentos')
	adivina = input()
	adivina = int(adivina)
	intentos = intentos+1
	if adivina < numero:
		print("Demasiado pequeño!")
	if adivina > numero:
		print("Demasiado grande!")
	if adivina == numero:
		break
if adivina == numero:
	intentos = str(intentos)
	print('Fabuloso, '+nombre+', acercaste el numero en ' + intentos+' intentos.')

if adivina != numero:
	numero = str(numero)
	print('Que fatalidad ' +nombre+' Yo estaba pensando en el numero ' + numero)