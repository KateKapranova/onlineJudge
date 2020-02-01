#Test Suite for weektask02 with 5 tests: 1 recursion check and 4 test cases
#Functioning test suite

import unittest
from sampleSolution import string_reverse, string_iterative
from debugger import test_recursion

class TestA(unittest.TestCase):
    def runTest(self):
       result = test_recursion(lambda: string_reverse("abcdef"))
       self.assertEqual(result, True)

class TestB(unittest.TestCase):
    def runTest(self):
       result = string_reverse("abcdef")
       self.assertEqual(result, "fedcba")

class TestC(unittest.TestCase):
    def runTest(self):
       result = string_reverse("F34oZ")
       self.assertEqual(result, "Zo43F")

class TestD(unittest.TestCase):
    def runTest(self):
       result = string_reverse("Rekursion")
       self.assertEqual(result, "noisrukeR")

class TestE(unittest.TestCase):
    def runTest(self):
       result = string_reverse("ProgrammingIsFun")
       self.assertEqual(result, "nuFsIgnimmargorP")

def test():
    suite = unittest.TestSuite()
    #if there is only one test: 
    #suite.addTests([TestA(),TestB()])
    suite.addTests([TestA(),TestB(),TestC(),TestD(),TestE()])
    result = unittest.TextTestRunner().run(suite)
    return result.wasSuccessful() #return True if all tests are passed, else False
    #print(result.testsRun)
   
if __name__ == '__main__': 
    print(test())
