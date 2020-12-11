# instalar el modulo: pip install gTTS
from gtts import gTTS 

# texto a voz
tts = gTTS('Este es un texto de prueba')

# Guardar el audio
tts.save('hello.mp3')