import time 

limite = 40

def barraProgreso(segmento, total, longitud):
	porcentaje = segmento / total
	completado = int (porcentaje * longitud)
	restante = longitud - completado
	barra = f"[{'#' * completado}{'^' * restante}{porcentaje:.2%}]"
	return barra


for i in range(limite + 1):
	time.sleep(0.05)
	print(barraProgreso(i, limite, 40), end = "\r")