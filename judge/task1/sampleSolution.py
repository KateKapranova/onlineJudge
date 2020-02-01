#week1 Aufgabe: Wiederholung
#Eingabe: eine naturliche Zahl N von std.in
#Ausgabe: (1) True falls N gerade / False sonst
#         (2) char, die nach ASCII-Tabelle mit der Zahl N uebereinstimmt, keine Fehlerbehandlung
#         (3) Liste der Laenge 5, die die naechsten 5 Nachfolger von der Zahl N enthaelt, aber ohne Zahlen, die durch 5 geteilt werden koennen
#         (4) Funktionsaufruf: Definieren Sie eine Funktion namens casting(x), die als Argument ein int-Wert bekommt und castet diesen als float.  
import sys

def newFunction(x):
    L=[]
    if x%2==0:
        for i in range(1,x+1):
            if (i%14==0):
                L.append(i)
    else:
        for i in range(1,x+1):
            if (i%17==0):
                L.append(i)
    return L


def revision(x):
    output=[]
    number = int(x)
    #Teil 1
    if number%2 == 0:
        output.append(True)
    else:
        output.append(False)

    #Teil 2
    output.append(chr(number))

    #Teil3
    L=[]
    i=0
    token=number
    while (i<5):
        token+=1
        if (token % 5 ==0 ):
            continue
        else:
            L.append(token)
            i+=1
    output.append(L)

    #Teil4
    output.append(newFunction(number))
    #print(output)
    return output

revision(112)

