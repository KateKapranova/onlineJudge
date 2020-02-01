#Musterloesung fuer rekursive Umdrehung der Zeichenketten

def string_reverse(str):
    print("call for {}".format(str))
    if len(str) == 0:
        return ""
    return str[-1]+string_reverse(str[:-1])


def help_func():
    str = input()
    new_str=string_reverse(str)
    return new_str

print(help_func())
