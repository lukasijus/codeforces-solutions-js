/*
 * File Created: Monday, 30th November 2020 3:31:00 pm
 * Author: Lukas Rimkus
 */

'use-strict'

const { count } = require("console");

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

        const p1 = data.shift().split(' ').map(Number);

        const p2 = data.shift().split(' ').map(Number);

        const p3 = data.shift().split(' ').map(Number);

        const p4 = data.shift().split(' ').map(Number);


        const res = d(p1,p2,p3,p4);

        console.log(res)
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 

function a(num)
{
    return num.length ;
}



function b(goal)
{

    function jump1(y,k)
    {
        return y + k;
    }
    function jump2(y)
    {
        return y - 1;
    }

    let sum = 0;

    let jumps = 0;

    let arr = [];

    while(sum < goal)
    {
        jumps++;

        arr.push(jumps);

        sum = sum + jumps;
    }
    
    if(sum === goal)
    {
        return arr.length;
    }
    else
    {
        let current_pos = sum;

        // that's how many steps back;
        let diference = current_pos - goal; 

        console.log(arr, arr.length, sum, diference)

        for(let i = 0 ; i < arr.length; i++)
        {
            if((arr[i] + 1) === diference)
            {
                return arr.length;
            }
        }
       return arr.length + 1;
    }
}

function c(x,y)
{
    const arr = new Array(2);

    arr[0] = x - 1;

    arr[1] = y
    return arr;
}

function help(a)
{   
    for(let i = 0; i < a.length; i++)
    {
        if(a[i] > a[i + 1])
        {   
            return false;
        }
    }
    return true;
}

function d(n, x, arr)
{
    let count = 0 ;

    if(n === 1 || help(arr))
    {
        return 0;
    }

    for(let i = 0 ; i < arr.length; i++)
    {
        const current = arr[i];

        if(current > x)
        {
            [arr[i], x] = [x, arr[i]];
            
            count++;
        }
        if(help(arr))
        {
            return count;
        }
    }
    return  -1;
}

function e(p1,p2,p3,p4)
{
    const permutations = [1234, 1243, 1324, 1342, 1423, 1432 ,2134 ,2143 ,2314 ,2341 ,2413 ,2431, 3124 ,3142, 3214 ,3241, 3412, 3421, 4123, 4132 ,4213, 4231, 4312, 4321];
    return 8;
}


module.exports = e;