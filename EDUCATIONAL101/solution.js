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

        const n = parseInt(readLine(), 10);

        const red = readLine().split(' ').map(Number);

        const m = parseInt(readLine(), 10);

        const blue = readLine().split(' ').map(Number);

        const res = b(n,red,m,blue)
        
        console.log(res)
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function a(seq){
    if(seq.length % 2 === 0 && seq[0] !== ')' && seq[seq.length - 1] !== '('){
        return 'YES'
    } else {
        return 'NO'
    }
}

function b(n,r,m,b){
    let rmax = 0;
    let bmax = 0;
    let redSum = 0;
    let blueSum = 0;
    r.forEach(red => {
        redSum += red;

        if(redSum > rmax){
            rmax = redSum;
        }
    });
    b.forEach(blue => {
        blueSum += blue;

        if(blueSum > bmax){
            bmax = blueSum;
        }
    });
    return rmax + bmax;
}

function c(n,k,h){
    for(let i = 0; i < n; i++){
        if(i === 0 ){
            current_height = k + h[i];
        } else {

        }
        next_height = k + h[i + 1];
    }
}

module.exports = b;