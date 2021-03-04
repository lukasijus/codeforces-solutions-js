'''
File Created: Saturday, 21st November 2020 4:37:00 pm
Author: Lukas Rimkus
'''
import sys

def get_ints():
    return  map(int, input().split())
def get_list():
    return list(map(int, input().split()))

def solve(s, l , r):
    # substring
    print(s[(l-1):r])
    return 'YES'

if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        n, q = get_ints()
        s = input()
        for _ in range(q):
            l, r = get_ints()
            res = solve(s, l, r)
            print(res)