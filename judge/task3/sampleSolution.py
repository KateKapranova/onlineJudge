#linked list implementation

class OperatingSystem:
    #constructor
    def __init__(self, name=None, date=None):
        self.name = name
        self.releaseDate = date
        self.next = None

class Timeline:
    #constructor
    def __init__(self):
        self.head = None

    #don't change this function
    def traverse(self):
        L=[]
        actualNode = self.head
        while actualNode is not None:
            L.append((actualNode.name, actualNode.releaseDate))
            actualNode = actualNode.next
        return L

    def insert(self, name,date):
        #create a new instance of Operating System class
        newOS = OperatingSystem(name,date)

        actual = self.head
        #check if we can insert at the beginning
        if (newOS.releaseDate < actual.releaseDate):
            newOS.next=self.head
            self.head=newOS
            return

        #else find the insertion point
        while (actual.next):
            #print(last.next.releaseDate)
            if (newOS.releaseDate < actual.next.releaseDate):
                newOS.next = actual.next
                actual.next = newOS
                return
            actual = actual.next

        #if still not inserted, insert at the end
        actual.next=newOS


def helpFunction():
    inputString=input()
    inputArr = inputString.split(",")
    osName = inputArr[0]
    osRelease = int(inputArr[1])
    return (osName,osRelease)

os1=OperatingSystem("Unics",1969)
os2=OperatingSystem("Windows 95",1995)
os3=OperatingSystem("Mac OS X", 2000)

timeline = Timeline()
timeline.head = os1

timeline.head.next = os2
os2.next = os3

# inputPair = helpFunction()

# timeline.insert(inputPair[0], inputPair[1])
# print(timeline.traverse())

#timeline.insert("macOS Catalina", 2019)
#timeline.traverseAndPrint()

# timeline.insert("Debian 1.1", 1996)
# timeline.traverseAndPrint()

# timeline.insert("MS DOS", 1981)
# timeline.traverseAndPrint()

#timeline.insert("IBSYS",1960)
#timeline.traverseAndPrint()

#timeline.insert("Linux 0.1",1990)
#timeline.traverseAndPrint()
