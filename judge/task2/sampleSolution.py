#Musterloesung fuer rekursive Umdrehung der Zeichenketten

def string_reverse(s):
    if len(s) == 0:
        return ""
    return s[-1]+string_reverse(s[:-1])

#this solution will be graded as wrong
def string_iterative(s):
    return s[::-1]
