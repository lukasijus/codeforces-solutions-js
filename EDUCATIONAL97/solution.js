/*
 * File Created: Thursday, 11th February 2021 1:42:08 pm
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

        const [l,r] = get_ints();
        console.log(a(l,r));
    }
});

function get_ints() { 
    return data[currentLine++].split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function a(l,r){
    if(2 * l > r){
        return 'YES';
    } else {
        return 'NO';
    }
}

module.exports = a;