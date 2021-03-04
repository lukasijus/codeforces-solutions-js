'''
File Created: Tuesday, 17th November 2020 3:41:09 pm
Author: Lukas Rimkus

n,c0,c1,h
s 
1. to change s one time: cnt += h
2. to buy '0': cnt += c0
3. to buy '1': cnt += c1

find the minimum cnt to buy all characters in s

1. find how many 0 and 1 are in the character
2. check the ration between cnt0 and cnt1: cnt0 / cnt1
2. check the ratio betwween c0/c1: r = c0 / c1

'''

import sys

def get_ints():
    return  map(int, input().split())
def get_list():
    return list(map(int, input().split()))

def solve():
    for _ in range(int(input())):
        n, c0, c1, h = get_ints()
        s = input()
        cnt0 = 0 
        cnt1 = 0
        cnt = 0
        for i in s:
            if i == '0':
                cnt0 += 1
            if i == '1':
                cnt1 += 1
        if cnt0 == 0 or cnt1 == 0:
            if cnt0 == 0:
                r1 = 0
            else:
                r1 = cnt0
        else:
            r1 = cnt0 / cnt1
        r2 = c0 / c1
        if r2 == 1:
            for i in s:
                cnt += c1
            print(cnt)
        elif r2 > 1:
            if c0 <= (c1 + h):
                for i in s:
                    if i == '0':
                        cnt += c0
                    if i == '1':
                        cnt += c1
            else:
                # compute the cost of changing all the 0 
                cnt += cnt0 * h
                cnt += c1 * n
            print(cnt)
        else:
            if c1 <= (c0 + h):
                for i in s:
                    if i == '0':
                        cnt += c0
                    if i == '1':
                        cnt += c1
            else:
                cnt += cnt1 * h
                cnt += c0 * n
            print(cnt)
                    

        


                
        
        

if __name__ == "__main__":
    solve()


