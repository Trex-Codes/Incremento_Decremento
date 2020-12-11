# Importar gTTS
from gtts import gTTS

texto = input("Introduce Texto: ")
# Convertimos texto ingresado a voz 
# Le indicamos el Idioma 
voz = gTTS(texto, lang='es-us')

#guardar 
voz.save("audio.mp3")