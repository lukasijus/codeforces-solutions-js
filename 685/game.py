'''
File Created: Saturday, 21st November 2020 5:05:15 pm
Author: Lukas Rimkus
'''
import sys

def get_ints():
    return  map(int, input().split())
def get_list():
    return list(map(int, input().split()))

def solve(d,k):
    # lets assume that play optimally means you take the max k allowed
    # total turns would be
    if d % k == 0:
        turns = d // k
    else:
        turns = (d // k) + 1
if __name__ == "__main__":
    for _ in range(int(input())):
        d, k = get_ints()
        res = solve(d,k)
        print(res)

        