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

        const [A,B,n] = readLine().split(' ').map(Number);
        const a = readLine().split(' ').map(Number);
        const b =readLine().split(' ').map(Number);
        
        const res = hero(A,B,n,a,b);
        console.log(res);
    }
});

function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function a(s){
    let finalString = '';
    let first = 97;
    let last = 122;
    for(let i = 0 ; i < s.length ; i++){
        let ascii = s[i].charCodeAt(0);
        if(i % 2 === 0){
            //alice turn
            if(ascii !== first){
                finalString += String.fromCharCode(first);
            } else {
                finalString += String.fromCharCode(first + 1);
            }
        } else {
            //Bob turn
            if(ascii !== last){
                finalString += String.fromCharCode(last);
            } else{
                finalString += String.fromCharCode(last - 1);
            }
        }
    }
    return finalString;
}

function hero(A,B,n,a,b){
    let monster = new Array(n);
    for(let i = 0; i< n; i++){
        monster[i] = [a[i], b[i]];
    }
    // sort monster by their attack power increasing order
    monster.sort((a,b) => a[0] - b[0]);
    
    for(let i = 0 ; i < n ; i++){
        // check if hero still alive?
        // console.log(monster[i])
        const [dmg, h] = monster[i];
        if(B <= 0) {
            return 'NO';
        }
        // how many fights to kill the monster?
        const count = Math.ceil(h / A);
        // how many fight a monster needs to kill a hero?
        const count2 = Math.ceil(B / dmg);
        // if a monster needs less fights to kill a hero than the hero cannot save the town
        // console.log('count = ', count, 'count2 = ', count2);
        if(count2 < count) return 'NO';
        // damage the hero
        B -= count * dmg;   
        // console.log('B = ', B);
    }
    return 'YES';
}

module.exports = hero;