from modulefinder import ModuleFinder

#path like './testFile2.py'
#path='./testFile4.py'
#warning is TRUE if undesired import is DETECTED
#warning is FALSE if undesired import is NOT DETECTED

def static_check(path):
    finder = ModuleFinder()
    finder.run_script(path)

    bannedImports=["os","numpy","socketserver","http.server","sys"]
    imports=[]
    warning=False

    for name, mod in finder.modules.items():
        imports.append(name)
        print('%s: ' % name, end='')
        print(','.join(list(mod.globalnames.keys())[:3]))
        
    if list(set(imports) & set(bannedImports)):
        warning=True
    print(imports)    
    return warning

#print(static_check(path))