/*
You are asked to watch your nephew who likes to play with toy blocks in a strange way.

He has n boxes and the i-th box has ai blocks. His game consists of two steps:

he chooses an arbitrary box i;
he tries to move all blocks from the i-th box to other boxes.
If he can make the same number of blocks in each of n−1 other boxes then he will be happy, otherwise, will be sad. Note that your nephew can only move the blocks from the chosen box to the other boxes; he cannot move blocks from the other boxes.
You don't want to make your nephew sad, so you decided to put several extra blocks into some boxes in such a way that no matter which box i he chooses he won't be sad. What is the minimum number of extra blocks you need to put?

Input
The first line contains a single integer t (1≤t≤1000) — the number of test cases.

The first line of each test case contains the integer n (2≤n≤105) — the number of boxes.

The second line of each test case contains n integers a1,a2,…,an (0≤ai≤109) — the number of blocks in each box.

It's guaranteed that the sum of n over test cases doesn't exceed 105.

inputCopy
3
3
3 2 2 -> 3. 1 -> 2 || 2 (2,3,2) || (2,2,3) 2. 1->
4
2 2 3 2
3
0 3 0
outputCopy
1
0
3

In the first test case, you can, for example, put one extra block into the first box and make a=[4,2,2]. If your nephew chooses the box with 4 blocks, then we will move two blocks to the second box and two blocks to the third box (0,4,4). If he chooses the box with 2 blocks then he will move these two blocks to the other box with 2 blocks. (4,0,4) || (4,4,0)

In the second test case, you don't need to put any extra blocks, since no matter which box your nephew chooses, he can always make other boxes equal.

In the third test case, you should put 3 extra blocks. For example, you can put 2 blocks in the first box and 1 block in the third box. You'll get array a=[2,3,1].
*/

'use-strict'

process.stdin.resume();
process.stdin.setEncoding('utf8');

let data = '';
let currentLine = 0;

process.stdin.on('data', chunk => {
data += chunk;
});

process.stdin.on('end', () =>{
    data = data.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

    let testCases = parseInt(data.shift());

    while(testCases--) {

        const n = parseInt(data.shift());

        const arr = get_ints();

        const res = b(n,m);

        console.log(res)
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function b(n, arr)
{
    arr.sort((a,b) => b - a);

    const max = arr[0];

    const sum = arr.reduce((a, b) => a + b);

    const k = Math.max(Math.ceil(sum/(n - 1)), max)

    return (n - 1) * k - sum;
}

module.exports = b;