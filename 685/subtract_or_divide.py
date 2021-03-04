'''
File Created: Saturday, 21st November 2020 3:53:08 pm
Author: Lukas Rimkus
'''
import sys
from math import gcd

def get_ints():
    return  map(int, input().split())
def get_list():
    return list(map(int, input().split()))
def solve(n, res):
    # 21. 21 / 7 = 3. 3 - 1 = 2. 2 - 1 = 1
    # 20. 20 / 10 = 2. 2 - 1 = 1
    if n == 1:
        return res + 0
    if n == 2:
        return res + 1
    elif n % 2 == 0:
        res = res + 1
        d = n // 2
        n = n / d
        return solve(n, res)
    else:
         res = res + 1
         n = n - 1
         return solve(n, res)


    


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        n = int(input())
        res = 0
        r= solve(n, res)
        print(r)