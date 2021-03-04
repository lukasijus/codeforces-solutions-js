/*
 * File Created: Tuesday, 16th February 2021 2:01:47 pm
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
 
         const [n,k] = readLine().split(' ').map(Number);
 
         const res = b(n,k);
 
         console.log(res)
     }
 });
 
 function get_ints() { 
     return data.shift().split(' ').map(Number);
 }
  
 function readLine() { 
         return data[currentLine++];
 }

 function a(n,a){
     a.sort((a,b) => a - b);
     let count = 0;
     for(let i = 0 ; i < n; i++){
         if(i === n - 1) break;
         if(a[i] !== a[i+1]){
             return n - i - 1;
         }
     }
     return 0;
 }

function b(n,k){
    let a = n;
    let b = 1;
    if(n % 2 === 0){
        // they don't meet each other
        if(n === k) return k;
        else if(n > k){
            return k;
        } else {
            return k % n;
        }
    } else {
        // they meet each other every 2 times in every cycle: ->
        // how many cycles?
        if(n === k){
            return b + 1;
        } else if(n > k){
            const middle = Math.ceil(n / 2);
            if(middle > k){
                return k;
            } else {
                return k + 1;
            }
        } else {
            const cycle = Math.floor(k / n);
            let rem = k % n - 1;
            // how many diff seq?
            const seq = Math.floor(n / 2);
            b = 1 + Math.min(seq,cycle) * 2;
            if(b === n) b = 1;
            for(let a = n; rem > 0; a--, rem--,b++){
                
                if(a === b) b++;
                // console.log(`${a}, ${rem}, ${b}`)
            }
            return b;
        }
    }
}

module.exports = b;