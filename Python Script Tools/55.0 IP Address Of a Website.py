# Importar el paquete necesario 
import socket 

# Definir el sitio web objetivo 
url = "google.com"

# Obtener la ip mediante URL
print("ip",socket.gethostbyname(url))