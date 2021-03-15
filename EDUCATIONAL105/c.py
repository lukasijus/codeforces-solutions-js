#!/usr/bin/env python
import os
import sys
from io import BytesIO, IOBase
import math
from collections import Counter
import bisect
 
 
def func1(array_a, array_b):
    if (not array_a) or not array_b:
        return 0
    max_count = 0
    curr = 0
    b_start = 0
    b_end = 0
    # print(array_a, array_b)
    good_pos = set(array_a).intersection(set(array_b))
    good_len = len(good_pos)
    while b_end < len(array_b):
        # print("here", curr, b_start, b_end)
        while curr < len(array_a) and array_a[curr] <= array_b[b_end]:
            if array_a[curr] in good_pos:
                good_len -= 1
            curr += 1
        # print("curr", curr, good_len)
        while b_start < b_end and array_b[b_start] + curr <= array_b[b_end]:
            # print(array_b[b_start], array_b[b_end])
            b_start += 1
        max_count = max(max_count, min(b_end - b_start + 1, curr) + good_len)
        # print("b start end", b_start, b_end)
        b_end += 1
        # print(max_count)
    print(max_count)
    return max_count
 
 
def func(array_a, array_b):
    a_0 = bisect.bisect_left(array_a, 0)
    # print('a_0 = ', a_0, 'array_a = ', array_a)
    b_0 = bisect.bisect_left(array_b, 0)
    return func1(array_a[a_0:], array_b[b_0:]) + func1(
        [-i for i in array_a[:a_0][::-1]], [-i for i in array_b[:b_0][::-1]]
    )
 
 
def main():
    num_test = int(parse_input())
    for _ in range(num_test):
        n, m = [int(i) for i in parse_input().split()]
        array_a = [int(i) for i in parse_input().split()]
        array_b = [int(i) for i in parse_input().split()]
        print(func(array_a, array_b))
 
parse_input = lambda: sys.stdin.readline().rstrip("\r\n")
 
# endregion
 
if __name__ == "__main__":
    main()