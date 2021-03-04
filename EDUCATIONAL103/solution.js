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

        const [n , k] = readLine().split(' ').map(Number);

        console.log(a(n , k));

    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function a(n, k){
    /*
    You should create an array of n positive integers a1,a2,…,an such that the sum (a1+a2+⋯+an) is divisible by k and maximum element in a is minimum possible.

    What is the minimum possible maximum element in a?
    */
    return Math.floor((Math.floor((n + k -1)/k)*k + (n - 1))/n);
}



module.exports = a;
