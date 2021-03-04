/*
 * File Created: Thursday, 14th January 2021 3:54:21 pm
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

        const [n, k] = readLine().split(' ').map(Number);
        
        const res = c(n,k);

        console.log(res.join(" "));
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function a(n, d, arr){
    
    arr.sort((a,b) => a - b);
    // console.log(arr)
    for(let i = 0; i < n ; i++){
        if(arr[i] <= d) continue;
        if(arr[i] > d){
            if(arr[0] + arr[1] <= d && i !== 0 && i !== 1 ){
                continue;
            }
            if(i === 0){
                if(arr[1] + arr[2] <= d) continue;
            }
            if(i === 1){
                if(arr[0] + arr[2] <= d) continue;
            }
        }
        return 'NO'
    }
    return 'YES'
}

function gcd(a,b){
    if(b === 0) return a;
    else{
        return gcd(b, a % b)
    }
}

function lcm(a,b){
    return (a * b) / gcd(a,b)
}

function mul(s, k) {
    let res = '';
    while(k--) res += s;
    return res;
}

function b(s,t){
    const n = s.length;
    const m = t.length;
    const g = gcd(n,m);
    // console.log('gcd(n,m) = ',g,'mul(s,m/g) = ', mul(s, m/ g), 'mul(t,n/g) = ', mul(t, n / g), 'm/g = ', m/g, 'n/g = ', n/g)
    if(mul(s,m /g) === mul(t, n / g)){
        return mul(s, m / g);
    } else {
        return -1;
    }
}

function c(n ,k){
    let ans = [];
    for(let i = 1; i < (k - (n - k)); i++){
        ans.push(i);
    }
    for(let i = k ; i >= (k - (n - k)); i--){
        ans.push(i);
    }
    return ans
}

function d(instructions){
    let x = 0;
    for(let instruction in instructions){
        console.log(instruction);
    }
    return x;
}

module.exports = c;