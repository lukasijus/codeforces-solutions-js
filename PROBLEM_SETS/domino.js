/*
 * File Created: Friday, 27th November 2020 10:19:28 am
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

main();
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
// Complete the function below.
function solve(n, m)
{
    // console.log(n, arr);

    // area = 2 * 4 = 8;

    return Math.round((m * n) / 2);
}
 
function main()
{

        const [n, m ] = get_ints();

        const res = solve(n,m);

        console.log(res) 

}

const fs = require('fs'); 
const path = require('path');

fs.readdir(__dirname, (err, files) => {
     if(err) console.log('coulnd not read directory')
     else{
        files.forEach(file => {
            if(path.extname(file) === '.txt'){
                fs.readFile(path.join(__dirname,file), 'utf-8', (err, data) =>{
                    if(err) console.log('could not read file')
                    else {
                        data = data.split('\r\n')
                        console.log(data, data.length)
                        const test = data.shift()
                        for(let t = 1; t <= test; t++){
                            const [n, m] = data.shift().split(' ').map(Number);
                        
                            const result = solve(n,m);

                            console.log(result);
                        } 
                    }
                })
            }
        })
    }
})
