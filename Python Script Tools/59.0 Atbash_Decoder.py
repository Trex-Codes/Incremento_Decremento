import time
from subprocess import call

atbash = {'A' : 'Z', 'B' : 'Y', 'C' : 'X', 'D' : 'W', 'E' : 'V',
        'F' : 'U', 'G' : 'T', 'H' : 'S', 'I' : 'R', 'J' : 'Q',
        'K' : 'P', 'L' : 'O', 'M' : 'N', 'N' : 'M', 'O' : 'L',
        'P' : 'K', 'Q' : 'J', 'R' : 'I', 'S' : 'H', 'T' : 'G',
        'U' : 'F', 'V' : 'E', 'W' : 'D', 'X' : 'C', 'Y' : 'B', 'Z' : 'A', '.':'?', '?':'.'}

def atbash_cypher(message):
        finalMessage = ""
        for letter in message.upper():
            if letter != " ":
                finalMessage += atbash[letter]
            else:
                finalMessage += " "

        finalMessage = finalMessage.lower().capitalize()

        return finalMessage

# Atbash to Text 
def Atbash_Text():
    messageInput = str(input("Dime la frase: "))

    contador = 0
    while  contador < 1:
        call('clear')
        # time.sleep(5)
        call('clear')
        contador = contador+1

    call('clear')
    print("-------------------------")
    print(f"El texto dice: {atbash_cypher(messageInput)}")
    print("-------------------------")

# Text to Atbash
def Text_Atbash():

    messageInput = str(input("Dime la frase: "))

    contador = 0
    while  contador < 1:
        call('clear')
        # time.sleep(5)
        call('clear')
        contador = contador+1

    call('clear')
    print("-------------------------")
    print(f"El texto dice: {atbash_cypher(messageInput)}")
    print("-------------------------")



contador = 0
while contador == 0:

    Option = input(""" Which option you want
                Atbash -> Text (1)
                Text -> Atbash (2)
                """)

    if Option == "1":
        Atbash_Text()
        # contador = contador+1
    elif Option == "2":
        Text_Atbash()
        # contador = contador+1
    elif Option == "quit" or Option == "q":
        contador = contador+1

# -----------------------------------------------------------------------

# from subprocess import call 
# import subprocess

# openFile = open('C:/Users/juansebastian/Desktop/notas.py')
# openFile.read()

# subprocess.run(["ls", "-l"])