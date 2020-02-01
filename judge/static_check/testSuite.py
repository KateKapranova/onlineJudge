#Test Suite for static_check
#Functioning test suite

import unittest
import testFile1
from checker import static_check

class TestA(unittest.TestCase):
    def runTest(self):
       result = static_check('./testFile4.py')
       self.assertEqual(result, False)

def test():
    suite = unittest.TestSuite()
    #if there is only one test: 
    suite.addTest(TestA())
    #suite.addTests([TestA(),TestB(),TestC(),TestD()])
    result = unittest.TextTestRunner().run(suite)
    return result.wasSuccessful() #return True if all tests are passed, else False
    #print(result.testsRun)
   
if __name__ == '__main__': 
    print(test())
