import requests 
import json 

def num(apikey,country,numero):
    agent = {'User-Agent':'Mozilla Firefox Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0'}
    print('Escaneando...' + numero)
    pe = requests.get(
        'http://apilayer.net/api/validate?access_key={}&number={}&country_code={}&format=1'.format(apikey,numero,country),
        headers=agent 
    )
    
    data = json.loads(pe.text)
    for d in data: 
        print('[+] {}: {}'.format(d, data[d]))
        
num(apikey='875d76735475dac1d29b428f7d539036',country='CO',numero='320 4273861')