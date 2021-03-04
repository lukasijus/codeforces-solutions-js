/*
 * File Created: Friday, 5th February 2021 3:53:54 pm
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

        const [n,m] = readLine().split(' ').map(Number);

        const a = readLine().split(' ').map(Number);
        const b = readLine().split(' ').map(Number);
        const c = readLine().split(' ').map(Number);

        const res = fence(n,m,a,b,c);

        if(res === -1){
            console.log('NO');
        } else {
            console.log('YES');
            console.log(res.join(" "));
        }
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 

function a(px,py,s)
{
    // if px > 0 than search for R else L
    // if py > 0 than search for U else D
    let U = 0;
    let D = 0;
    let R = 0;
    let L = 0;
    for(let i = 0 ; i < s.length; i++){
        if(s[i] === 'U') U++;
        else if(s[i] === 'D') D++;
        else if(s[i] === 'R') R++;
        else if(s[i] === 'L') L++;
    }
    if(px > 0){
        if(px > R) return 'NO';
    } 
    if(px < 0) {
        if(Math.abs(px) > L) return 'NO';
    }
    if(py > 0){
        if(py > U) return 'NO';
    } 
    if(py < 0) {
        if(Math.abs(py) > D) return 'NO';
    }
   return 'YES'; 
}

function b(n,k,h){
    // find the last boulder's fail position or if it was waisted in the dump (-1)
    const boulders = new Array(k);
    let j = 0;
    while(k){
        for(let i = 0 ; i < h.length; i++){
            if(h[i] < h[i + 1]){
                h[i] = h[i] + 1;
                boulders[j++] = i+1;
                k--;
                break;
            }
            if(i === h.length - 1){
                boulders[j++] = -1;
                k--;
                return  -1;
            }
        }
    }
    return boulders[boulders.length - 1];
}

function fence(n,m,a,b,c){
    var diff = {};
    var colorMap = {};
    for(let i = 0; i < n; i++){
        if(colorMap[a[i]] == null){
            colorMap[a[i]] = new Set();
        }
        colorMap[a[i]].add(i);
        if(a[i] != b[i]){
            if(diff[b[i]] == null){
                diff[b[i]] = [];
            }
            diff[b[i]].push(i);
        }
    }

    var keep = [];
    var output = [];
    for(let i = 0 ; i < m; i++){
        var tempc = c[i];
        if(diff[tempc] == null || diff[tempc].length == 0){
            if(colorMap[tempc] != null && colorMap[tempc].size > 0){
                var te = Array.from(colorMap[tempc]);
                while(keep.length > 0){
                    output.push(te[0] + 1);
                    keep.pop();
                }
                output.push(te[0] + 1);
            } else {
                keep.push(tempc);
            }
        } else {
            var ok = diff[tempc].shift();
            while(keep.length > 0){
                output.push(ok + 1);
                keep.pop();
            }
            output.push(ok + 1);
            colorMap[a[ok]].delete(ok);
            if(colorMap[tempc] == null){
                colorMap[tempc] = new Set();
            }
            colorMap[tempc].add(ok);
        }
    }
    var key = Object.keys(diff);
    var isOK = true;
    for(let i = 0; i < key.length; i++){
        if(diff[key[i]].length > 0){
            isOK = false;
            break;
        }
    }
    if(!isOK || output.length != m){
        return -1;
    }else {
        return output;
    }

}

module.exports = fence;