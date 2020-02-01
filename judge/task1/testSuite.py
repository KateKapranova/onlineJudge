#Test Suite with 4 tests for weektask01
#Functioning test suite

import unittest
from sampleSolution import revision

class TestA(unittest.TestCase):
    def runTest(self):
       result = revision(90)
       self.assertEqual(result, [True, 'Z', [91, 92, 93, 94, 96], [14, 28, 42, 56, 70, 84]])

class TestB(unittest.TestCase):
    def runTest(self):
       result = revision(122)
       self.assertEqual(result, [True, 'z', [123, 124, 126, 127, 128], [14, 28, 42, 56, 70, 84, 98, 112]])

class TestC(unittest.TestCase):
    def runTest(self):
       result = revision(75)
       self.assertEqual(result, [False, 'K', [76, 77, 78, 79, 81], [17, 34, 51, 68]])

class TestD(unittest.TestCase):
    def runTest(self):
       result = revision(112)
       self.assertEqual(result, [True, 'p', [113, 114, 116, 117, 118], [14, 28, 42, 56, 70, 84, 98, 112]])

def test():
    suite = unittest.TestSuite()
    #if there is only one test: suite.addTest([TestA()])
    suite.addTests([TestA(),TestB(),TestC(),TestD()])
    result = unittest.TextTestRunner().run(suite)
    return result.wasSuccessful() #return True if all tests are passed, else False
    #print(result.testsRun)
   
if __name__ == '__main__': 
    print(test())
