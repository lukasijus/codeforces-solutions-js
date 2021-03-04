'''
File Created: Saturday, 21st November 2020 4:51:44 pm
Author: Lukas Rimkus
'''
import sys

def get_ints():
    return  map(int, input().split())
def get_list():
    return list(map(int, input().split()))

def solve(n,k,a,b):
    # n is the length of first word (a)
    # k is the length of second word (b)
    # can you convert a to b by
    

if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        n , k = get_ints()
        a = input()
        b = input()
        res = solve(n,k,a,b)
        print(res)