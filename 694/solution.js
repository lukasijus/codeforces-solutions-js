/*
 * File Created: Wednesday, 6th January 2021 9:38:39 pm
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

    let testCases = parseInt(readLine(), 10);

    while(testCases--) {

        const [n, m ] = readLine().split(' ').map(Number);  

        const k = readLine().split(' ').map(Number);

        const c = readLine().split(' ').map(Number);

        const res = a(n,m,k,c);
        
        console.log(res)
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function a(n,m,guests,c){
    let count = 0;
    guests.sort((a,b) => b - a);
    for(let i = 0; i < guests.length; i++){
        const gift = c[guests[i] - 1];
        const money = c[i];
        count += Math.min(gift, money ? money : gift);
        // console.log('gift = ', gift, 'money = ', money, 'count = ', count);
    }
    return count;
}

module.exports =  a;