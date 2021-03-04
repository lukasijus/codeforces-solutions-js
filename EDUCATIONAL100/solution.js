/*
 * File Created: Thursday, 17th December 2020 3:59:09 pm
 * Author: Lukas Rimkus
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
        const arr = data.shift().split(' ').map(Number);
        b(n, arr);
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}

function gcd(a,b){
    if(a % b === 0) return b;
    else return gcd(b, a % b);
}
function lcm(a,b){
    return (a * b) / gcd(a,b);
}

function a(arr){
    const s = arr.reduce((a,b) => (a+b));
    if(s % 9 > 0 || s > 9*Math.min(arr[0],Math.min(arr[1],arr[2]))){
        return 'NO';
    }
    else return 'YES'
}

function b(n, arr){
    for(let i = 0 ; i < n; i++){
        process.stdout.write(Math.pow(2,Math.floor(Math.log2(arr[i]))) + " ");
    }
    process.stdout.write("\n")
}

module.exports = b;