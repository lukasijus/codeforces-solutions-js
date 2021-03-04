/*
 * File Created: Friday, 12th February 2021 3:29:08 pm
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

        const [a,b ] = get_ints();

        console.log(addndiv(a,b));
    }
});

function get_ints() { 
    return readLine().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function addndiv(a,b){
    let count = 0;
    while(a > 0){
        if(b === a){
            count = count+2;
            return count;
        }
        if(b > a){
            count++;
            return count;
        }
        if(a % b=== 0){
            b++;
        }
        else {            
            a = Math.floor(a/b);
        }
        count++;
        console.log(`a = ${a} and b = ${b}`)
    }
    return count;
}

module.exports = addndiv;