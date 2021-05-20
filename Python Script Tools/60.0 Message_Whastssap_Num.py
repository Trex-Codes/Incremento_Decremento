import pyautogui, webbrowser, time 

# Ingresa numero 
numero = input("Digite numero: ")
# numero = '+573222440723'

#escribimos la lista de mesnaje 
listaMensajes = [
	"perro1",
	"perro2",
	"perro3",
	"perro4"
]

# cargaos la pagina web 
webbrowser.open("https://web.whatsapp.com/send?phone=" + numero)
time.sleep(4)

# Escribimos la lista de mensaje 
for i in range(4):
	pyautogui.write(listaMensajes[i])
	pyautogui.press("Enter")