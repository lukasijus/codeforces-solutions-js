'''
File Created: Tuesday, 17th November 2020 4:19:29 pm
Author: Lukas Rimkus

find the median fo an array 5: ceil(5/2)
given n, and k divide array into k arrays of size n so that the sum median of the arrays are maximized

n = 2, k = 4
a = [0 24 34 58 62 64 69 78]
Test case 1: [0,24],[34,58],[62,64],[69,78]. The medians are 0,34,62,69. Their sum is 165.
you have to find the index of a number to check in the sub arrays, for example
math.ceil(n/2) -> 1  the first index
loop through array incrementing by n nad check the first occurence


4 3
2 4 16 18 21 27 36 53 82 91 92 95
idx = 2
for i in range(a):
    if i % k == 0:
        sum += k[idx-1]
    if i % k < idx - 1:
        k[i] = a[i]
    else:
        k[i] = a[n - i]
Test case 3: [2,91,92,95],[4,36,53,82],[16,18,21,27]. The medians are 91,36,18. Their sum is 145.


3 4
3 11 12 22 33 35 38 67 69 71 94 99
Test case 4: [3,33,35],[11,94,99],[12,38,67],[22,69,71]. The medians are 33,94,38,69. Their sum is 234.

different approach 
you can take the last kith number from the array BUT in k array number has to be in non-decreasing order!

you have an index of your media idx [a1 idx a2].... you have to pick all the numbers from the beging array to put into idx > a indexes
'''

import sys
import math

def get_ints():
    return  map(int, input().split())
def get_list():
    return list(map(int, input().split()))

def solve():
    for _ in range(int(input())):
        n , k = get_ints()
        a = get_list()
        cnt = 0
        arr = []
        idx = int(math.ceil((n + 1)/2))
        right = n - idx + 1
        i = right
        for j in range(k):
            cnt += a[-i]
            i += idx
        print(cnt)

if __name__ == "__main__":
    solve()
