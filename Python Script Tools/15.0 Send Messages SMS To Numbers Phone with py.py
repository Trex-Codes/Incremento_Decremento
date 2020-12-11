from twilio.rest import Client

# Agregar credenciales de Twilio 
account = ""
token = ""
client = Client(account, token)

# Mandar mensaje al numero objetivo 
message = client.messages.create(to="+123456789",
				from_= "+155555555",
				body= "Hola facialix")