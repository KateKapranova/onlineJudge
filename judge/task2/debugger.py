#recursion tracer
#relies on python debugging framework bdb
#start dbg in the background and run the function, raise an exception if recursion is detected

from bdb import Bdb
import sys

class RecursionDetected(Exception):
    pass

class RecursionDetector(Bdb):
    def do_clear(self, arg):
        pass

    def __init__(self, *args):
        Bdb.__init__(self, *args)
        self.stack = set()

    def user_call(self, frame, argument_list):
        code = frame.f_code
        if code in self.stack:
            raise RecursionDetected
        self.stack.add(code)

    def user_return(self, frame, return_value):
        self.stack.remove(frame.f_code)

def test_recursion(func):
    detector = RecursionDetector()
    #start debugging from frame
    detector.set_trace()
    try:
        func()
    except RecursionDetected:
        return True
    else:
        return False
    finally:
        sys.settrace(None)

def factorial_recursive(x):
    def inner(n):
        if n == 0:
            return 1
        return n * factorial_recursive(n - 1)
    return inner(x)


def factorial_iterative(n):
    product = 1
    for i in range(1, n+1):
        product *= i
    return product

assert test_recursion(lambda: factorial_recursive(5))
assert not test_recursion(lambda: factorial_iterative(5))
assert not test_recursion(lambda: map(factorial_iterative, range(5)))
assert factorial_iterative(5) == factorial_recursive(5) == 120