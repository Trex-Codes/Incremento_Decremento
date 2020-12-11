import smtplib 
from email.mime.multipart import MIMEMultipart 
from email.mime.text import MIMEText 

# agregar dirrecion dee corree y password 
sender_address = 'juan.13JSG@gmail.com' 
sender_pass = 'Sebasmesi2003'

# Iniciar la conexion al serivdor de correo electronico (Direccion, puerto)
session = smtplib.SMTP("smtp.server.com", 587)
session.starttls()
session.login(sender_address, sender_pass)

# Obtener una direccion de correo de una lista de direcciones 
for correo in ['juan.13JSG@gmail.com', 'juan.13JSG@outlook.es']:
	# Preparamos el correo agregando la informacion necesaria 
	message = MIMEMultipart()
	message['from'] = sender_address
	message['subject'] = 'Hello World PY!'
	mail_content = "Estas leyendo mi primer mundo en py con gmail"
	message.attach(MIMEText(mail_content, 'plain'))
	text = message.as_string()

	# Enviar el mensaje 
	session.sendmail(sender_address, correo, text)
session.quit()
