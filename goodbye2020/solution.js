/*
 * File Created: Wednesday, 30th December 2020 4:18:08 pm
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

    let testCases = parseInt(readLine(),10);

    while(testCases--) {

        // const n = parseInt(readLine(), 10);

        // const arr = readLine().split(' ').map(Number);

        const str = readLine()

        const res = c(str);

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
    if(n < 2) return 0;
    else if(n === 2) return 1;
    else{
        let myset = new Set();
        for(let i = 0 ; i < arr.length - 1; i++){
            for(let j = i + 1; j < arr.length; j++){
                myset.add(((arr[j] - arr[i]) / 2));
            }
        }
        return myset.size;
    }
}

function b(n,arr){
    let myset = new Set();
    myset.add(arr[0]);
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > arr[i - 1]){
            myset.add(arr[i]);
        }
        else{
            arr[i]++;
            myset.add(arr[i]);
        }
    }
    return myset.size;
}

function c(str){
    let cnt = 0;
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + 2]){
            if(arr[i] === 0){
                continue;
            }
            arr[i + 2] = arr[i + 2] === 0 ? arr[i + 2] + 1 :  0;
            cnt++;
        } 
        if(arr[i] === arr[i+1]){
            if(arr[i] === 0){
                continue;
            }
            cnt++;
            arr[i+1] = arr[i + 1] === 0 ? arr[i + 1] + 1 : 0;
        }
    }
    return cnt;
}

function d(n, w){
    
}

function e(arr){
    const mod = BigInt(10e8 + 7);
    let sum = BigInt(0);
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            for(let k = 0; k < arr.length; k++){
                console.log(BigInt(arr[i]), BigInt(arr[j]), BigInt(arr[k]),arr[i], arr[j], arr[k]   )
                sum += (BigInt(arr[i]) & BigInt(arr[j])) * (BigInt(arr[j]) | BigInt(arr[k]));
            }
        }
    }
    return sum % mod;
}

// module.exports = e;
 