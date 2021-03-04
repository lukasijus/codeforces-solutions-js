/*
 * File Created: Thursday, 18th February 2021 6:27:11 pm
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
        const n = parseInt(readLine());
        const arr = readLine().split(' ').map(Number);
        const res = a(n,arr);
        console.log(res)
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function a(n,arr){
    let sum = arr[0];
    let min = 0;
    for(let i = 1 ; i < n ; i++){
        if(sum + arr[i] > min){
            sum += arr[i];
            min++;
            sum -= min;
        } else {
            return 'NO'
        }
    }
    return 'YES'
}

module.exports = a;