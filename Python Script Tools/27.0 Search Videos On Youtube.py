from youtube_search import YoutubeSearch
# pip install youtube-search 
results = YoutubeSearch('Search terms',
max_results=10).to_json()
# Resultados en formado JSON
print(results)

results = YoutubeSearch('Search terms'
max_results=10).to_dict()
# Resultados en diccionario 
print(results)