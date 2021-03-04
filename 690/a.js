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

        const x = parseInt(data.shift());

        // const s = data.shift();

        const res = c(x);

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
    for(let i = 0; i < (Math.floor(n / 2)) + n % 2; i++){
        process.stdout.write(arr[i].toString());
        process.stdout.write(" ");
        if(i >= (n - i - 1)) break;
        process.stdout.write(arr[n - i - 1].toString());
        process.stdout.write(" ");
    }
    process.stdout.write("\n")
    
}

function b(s){
    if(s.length < 4) return 'NO';
    if(s.slice(s.length - 4, s.length) == '2020') return 'YES';
    if(s[0] == '2' && s.slice(s.length - 3, s.length) == '020') return 'YES';
    if(s.slice(0,2) == '20'&& s.slice(s.length - 2, s.length) == '20') return 'YES';
    if(s.slice(0,3) == '202' && s[s.length - 1] == '0' ) return 'YES';
    if(s.slice(0,4) == '2020') return 'YES';
    return 'NO';
    }

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
function c(x){
    if(x > 45) return -1;
    else if(x < 10) return x;
    else{
        let add = '9';
        add = parseInt(parseInt(add[0]) - 1).toString() + add;
        while(add.split('').map(Number).reduce((a,b) => a + b) < x){
            add = parseInt(parseInt(add[0]) - 1).toString() + add;
        }
        if(add.split('').map(Number).reduce((a,b) => a + b) === x) {
            return add;
        }
        let sum = add.split('').map(Number).reduce((a,b) => a + b);
        for(let i = 1; i < add[0] ; i++){
            if(sum - add[0] + i === x){
                let temp = i.toString();
                for(let j = 1; j < add.length; j++){
                    temp = temp + add[j]
                }
                return temp
            }
        }
    }
}
module.exports = c;