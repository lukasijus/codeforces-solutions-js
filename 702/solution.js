/*
 * File Created: Tuesday, 16th February 2021 3:32:09 pm
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
 
        const n = parseInt(readLine());

        const arr = readLine().split(' ').map(Number);
 
        const res = d(n, arr);
 
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
     let count = 0;
     for(let i = 0 ; i < n - 1; i++){
         let max = Math.max(arr[i], arr[i+1]);
         let min = Math.min(arr[i], arr[i+1]);
         if(max/min > 2){
             while(min * 2 < max){
                 max = max / 2;
                 count++;
             }
         } else{
             continue;
         }
     }
     return count;
 }

 function b(n,arr){
     let c0 = 0;
     let c1 = 0;
     let c2 = 0;
     let count = 0;
     for(let i = 0 ; i < n ; i++){
         if(arr[i] % 3 === 0){
             c0++;
         } else if(arr[i] % 3 === 1){
             c1++;
         } else if(arr[i] % 3 === 2){
             c2++;
         }
     }
    
     while(c1 !== n / 3 || c2 !== n / 3 || c1 !== n / 3){
        //  console.log(`${c0},${c1}, ${c2}`)
        if(c0 > n / 3){
            let free0 = c0 - n/3;
            while(free0 > 0){
                
                if(c1 < n / 3){
                    free0--;
                    c1++;
                    count+=1;
                    c0--;
                }
                if(c2 < n /3){
                    free0--;
                    c2++;
                    count+=2;
                    c0--;
                }
            }
        }
        if(c1 > n / 3){
            let free1 = c1 - n/3;
            while(free1 > 0){
                if(c2 < n / 3){
                    free1--;
                    c2++;
                    count += 1;
                    c1--;
                }
                if(c0 < n / 3){
                    free1--;
                    c0++;
                    count += 2;
                    c1--;
                }
            }
        }
        if(c2 > n/3){
            let free2 = c2 - n / 3;
            // console.log(`${free2}, ${c0}, ${c1}, ${c2}, ${n}`)
            while(free2 > 0){
                
                if(c0 < n / 3){
                    free2--;
                    c0++;
                    count += 1;
                    c2--;
                }
                if(c1 < n/3){
                    free2--;
                    c1++;
                    count += 2;
                    c2--;
                }
            }
        }
     }
     return count;
    
 }

 function c(x){
    for(let i = 1; i < 10001; i++){
        if(Math.cbrt(Number(x) - i * i * i) % 1 == 0 && (Number(x) - i * i * i) > 0){
            return 'YES'
        }
    }     
    return 'NO';
}


function d(n, arr){
    if(n === 1){
        return  0;
    }
    if(d === undefined)  var d = [];
    if(max ===undefined) var [max , pos] = [-1, -1];
    if(level === undefined) var level = -1;
    if(arr_left === undefined) var arr_left = [];
    if(arr_right === undefined) var arr_right = [];
    [max, pos, d] = find_max(arr, d);
    console.log(`max = ${max}, pos = ${pos}, d = ${d}`);
    //split arr in two arr_left and arr_right in pos 

    [arr_left, arr_right] = split_arr(arr_left, arr_right, arr, pos)
    console.log(`arr_left = ${arr_left} and arr_right = ${arr_right}`)
    // condition if arr is <= 3 than max will hold pos = d.length and other d.length + 1
    console.log(find_max(arr_left, d));
}

function find_max(arr,d){
    let max = -1;
    let pos = -1;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            pos = i;
        }
    }
    d[pos] = d.length;
    return [max, pos,d];
}

function split_arr(arr_left,arr_right, arr, pos){
    for(let i = 0 ; i < arr.length ; i++){
        if(pos === i) continue;
        if(pos > i){
            arr_left.push(arr[i]);
        }else{
            arr_right.push(arr[i])
        }
    }
    return [arr_left, arr_right]
}

 module.exports = d;