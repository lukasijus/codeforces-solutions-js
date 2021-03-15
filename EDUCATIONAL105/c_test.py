from c import func
from c import func1

import math
import os
import random
import re
import sys
import datetime

if __name__ == '__main__':
    filename = os.path.join(os.path.abspath(''), 'input.txt')
    read = open(filename)
    tests = int(read.readline())
    begin_time = datetime.datetime.now()
    for t in range(tests):
        n, m = map(int, read.readline().split())
        a = list(map(int,read.readline().split()))
        b = list(map(int,read.readline().split()))
        result = func(a,b)
        print('testCase', t, ': ', result)
    
    print('Finish in: ', datetime.datetime.now() - begin_time, 's')