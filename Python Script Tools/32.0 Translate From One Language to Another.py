# Instalacion: pip install googletrans 
from googletrans import Translator 
Translator = Translator()

# Traducir texto directamente 
Translator.Translate("Hello World!")
# Definir idioma destino 
Translator.Translate('Hello World!', dest="ja")
# Idioma de origen al traducir 
Translator.Translate('veritas lux mea', src='la')