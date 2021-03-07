'use-strict'

const { PassThrough } = require("stream");

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

        const [N,U,R,D,L] = readLine().split(' ').map(Number);

        const res = b(N,U,R,D,L);

        console.log(res)
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}

function b(N,U,R,D,L){
    let [rU, rR, rD, rL] = [U,R,D,L]; 
    for(let mask = 0; mask <= 16; mask++){
        [rU, rR, rD, rL] = [U,R,D,L]; 
        if (mask & 1){
            rU-= 1;
            rL-= 1;
        }
        if (mask & 2){
            rL-= 1;
            rD-= 1;
        }
        if (mask & 4){
            rD-= 1;
            rR-= 1;
        }
        if (mask & 8){
            rR-= 1;
            rU-=1;
        }
        if (Math.min(rU,rR,rD,rL) >= 0 && Math.max(rU,rR,rD,rL) <= N - 2){
            return 'YES'
        }
    }
    return 'NO';
}
 
module.exports = b;