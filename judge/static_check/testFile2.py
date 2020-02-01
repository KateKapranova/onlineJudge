import math

def func():
    print("I am evil")
    try:
        import sys
        sys._clear_type_cache()
    except ImportError:
        pass