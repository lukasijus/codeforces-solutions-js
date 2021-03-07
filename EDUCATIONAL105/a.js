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

        const a = readLine();

        const res = main(a);

        console.log(res)
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function main(a){
    let cnt_A = 0;
    let cnt_B = 0;
    let cnt_C = 0;
    let arr = [];
    for(let i= 0 ; i < a.length; i++){
        if(a[i] === 'A') cnt_A++;
        if(a[i] === 'B') cnt_B++;
        if(a[i] === 'C') cnt_C++;        
    }
    arr.push(['A', cnt_A]);
    arr.push(['B', cnt_B]);
    arr.push(['C', cnt_C]);
    arr.sort((a,b) => a[1] - b[1]);
    let sum = 0;
    let opn = a[0];
    if(opn === arr[arr.length - 1][0]){
        // the other two are closing brackets
        for(let i = 0 ; i < a.length ; i++){
            if(a[i] === opn){
                sum++;
            } else {
                sum--;
            }
            if(sum < 0){
                return 'NO';
            }
        }
    } else {
        // opn and arr[0] || arr[1] is opening and arr[arr.length - 1] are closing
        for(let i = 0 ; i < a.length ; i++){
            if(a[i] === opn || a[i] === arr[0][0] || a[i] === arr[1][0]){
                sum++;
            } else {
                sum--;
            }
            if(sum < 0){
                return 'NO';
            }
        }
    }

    if(sum !== 0){
        return 'NO'
    } else{
        return 'YES'
    }
}

module.exports = main;