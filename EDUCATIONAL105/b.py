import math
import os
import random
import re
import sys


if __name__ == '__main__':
    filename = os.path.join(os.path.abspath(''), 'input.txt')
    read = open(filename)
    tests = int(read.readline())
    for t in range(tests):
        n, U, R, D, L = map(int, read.readline().split())
        for mask in range(16):
            rU, rR, rD, rL = U, R, D, L
            print(rU, rR, rD, rL, mask)
            if mask & 1:
                rU -= 1
                rL -= 1
            if mask & 2:
                rL -= 1
                rD -= 1
            if mask & 4:
                rD -= 1
                rR -= 1
            if mask & 8:
                rR -= 1
                rU -= 1
            if min(rU, rR, rD, rL) >= 0 and max(rU, rR, rD, rL) <= n - 2:
                print("YES")
                break
        else:
            print("NO")
