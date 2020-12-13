import sys 
from sentimentanalyzer.sentimentanalyzer import Sentiment 

# Texto a analizar 
text = 'Hoy estare mejor'

# Realizamos el analisis y obtenemos la calificacion
# de regreso
obj = Sentiment(text=text)
data = obj.get
print(data)