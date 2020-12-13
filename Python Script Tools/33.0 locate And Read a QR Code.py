import cv2 
# Inicializar el dectetor de codigo QR 
qr = cv2.QRCodeDectetor()

# Leemos la imagen a analizar 
img = cv2.imread('Screen.jpg')

# Analizamos la imagen con el dectetor QR y recuperamos la informarcion
decodeText, points, _ = qr.detectAndDecode(img)

# Recorremos los resultados en caso que exista un QR en la imagen 
if points is not None:
	# Dibujamos un rectangulo para indicar la posicion del QR usando las cordenadas 
	for i in range (len(points)):
		cv2.line(img, tuple(points[i][0]), tuple(points[(i + 1) % len(points)][0]), 
		color=(255, 0, 0), thickness=2)
# Imprimimos el codigo QR identificado
if decodeText:
	print("Codigo: " + str(decodeText))
cv2.imwrite("Codigo:  QR.jpg", img)