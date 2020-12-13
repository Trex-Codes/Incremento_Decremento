import pytube 

url = 'https://www.youtube.com/watch?v=vxB0amY8BWs'
youtube = pytube.Youtube(url)
video = youtube.streams.first() # Establecer resolucion
video.donwload('../video') # Descargamos