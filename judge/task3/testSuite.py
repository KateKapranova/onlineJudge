#Test Suite for weektask03 with 4 tests: test classes for OOP
#Functioning test suite

import unittest
from sampleSolution import Timeline, OperatingSystem

class TestA(unittest.TestCase):
    def setUp(self):
        self.timeline = Timeline()
        self.os1=OperatingSystem("Unics",1969)
        self.os2=OperatingSystem("Windows 95",1995)
        self.os3=OperatingSystem("Mac OS X", 2000)
        self.timeline.head = self.os1
        self.timeline.head.next = self.os2
        self.os2.next = self.os3

    def runTest(self):
       self.timeline.insert("Linux 0.1", 1990)
       self.assertEqual(self.timeline.traverse(), [('Unics', 1969), ('Linux 0.1', 1990), ('Windows 95', 1995), ('Mac OS X', 2000)])

class TestB(unittest.TestCase):
    def setUp(self):
        self.timeline = Timeline()
        self.os1=OperatingSystem("Unics",1969)
        self.os2=OperatingSystem("Windows 95",1995)
        self.os3=OperatingSystem("Mac OS X", 2000)
        self.timeline.head = self.os1
        self.timeline.head.next = self.os2
        self.os2.next = self.os3

    def runTest(self):
       self.timeline.insert("macOS Catalina",2019)
       self.assertEqual(self.timeline.traverse(), [('Unics', 1969), ('Windows 95', 1995), ('Mac OS X', 2000), ('macOS Catalina', 2019)])

class TestC(unittest.TestCase):
    def setUp(self):
        self.timeline = Timeline()
        self.os1=OperatingSystem("Unics",1969)
        self.os2=OperatingSystem("Windows 95",1995)
        self.os3=OperatingSystem("Mac OS X", 2000)
        self.timeline.head = self.os1
        self.timeline.head.next = self.os2
        self.os2.next = self.os3

    def runTest(self):
       self.timeline.insert("Debian 1.1",1996)
       self.assertEqual(self.timeline.traverse(), [('Unics', 1969), ('Windows 95', 1995), ('Debian 1.1', 1996), ('Mac OS X', 2000)])

class TestD(unittest.TestCase):
    def setUp(self):
        self.timeline = Timeline()
        self.os1=OperatingSystem("Unics",1969)
        self.os2=OperatingSystem("Windows 95",1995)
        self.os3=OperatingSystem("Mac OS X", 2000)
        self.timeline.head = self.os1
        self.timeline.head.next = self.os2
        self.os2.next = self.os3

    def runTest(self):
       self.timeline.insert('IBSYS',1960)
       self.assertEqual(self.timeline.traverse(), [('IBSYS', 1960), ('Unics', 1969), ('Windows 95', 1995), ('Mac OS X', 2000)])


def test():
    suite = unittest.TestSuite()
    #if there is only one test: 
    #suite.addTest(TestA())
    suite.addTests([TestA(),TestB(),TestC(),TestD()])
    result = unittest.TextTestRunner().run(suite)
    return result.wasSuccessful() #return True if all tests are passed, else False
    #print(result.testsRun)
   
if __name__ == '__main__': 
    print(test())
