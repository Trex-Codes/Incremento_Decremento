from facepy import GraphAPI

# ingesar access token valido para interactuar 
Graph = GraphAPI(oauth_access_token)

# ultimas publicaciones de Facebook 
Graph.get('me/posts')

# Publicar una imagen 
Graph.post(
	path = 'me/photos',
	source = open('parrot.jpg', 'rb')
)