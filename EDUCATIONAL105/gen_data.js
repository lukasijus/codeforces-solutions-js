const fs = require('fs');
var result = '';

const testCases  = 1;
const rangeMN = 10e3;
const rangeAB = 10e3;
result += testCases + '\n';
for(let i = 0 ; i < testCases; i++){
    let [n,m] = [parseInt(Math.random() * rangeMN), parseInt(Math.random() * rangeMN)]
    while(n === 0){
        n = parseInt(Math.random() * rangeMN);
    }
    while(m === 0){
        m = parseInt(Math.random() * rangeMN);
    }
    
    const a =new Set();
    for(let i = 0; i < n; i++){
        let rand = parseInt(Math.random() * rangeAB);
        while (rand === 0) rand = parseInt(Math.random() * rangeAB);
        const sign = Math.random() > 0.5 ? 1 : -1;
        a.add(rand * sign);
    }
    const a_arr = [...(a)].sort((a,b) => a - b);
    const b = new Set();
    for(let i = 0; i < m; i++){
        let rand = parseInt(Math.random() * rangeAB);
        while (rand === 0) rand = parseInt(Math.random() * rangeAB);
        const sign = Math.random() > 0.5 ? 1 : -1;
        b.add(rand * sign);
    }
    const b_arr = Array.from(b).sort((a,b) => a - b);
    result = result + a_arr.length  + ' ' + b_arr.length + '\n';
    for(let i = 0; i < a_arr.length; i++){
        if(i ===  a_arr.length - 1) result += a_arr[i] + '\n';
        else result += a_arr[i] + ' ';
    }
    for(let i = 0; i < b_arr.length; i++){
        if(i === b_arr.length - 1) result += b_arr[i] + '\n';
        else result += b_arr[i] + ' ';
    }
    // console.log(`a = ${a}, b = ${b}, a_arr = ${a_arr}, b_arr = ${b_arr}`)
}

fs.writeFile('nodejs_solution_results.txt', result, function(err) { if(err) console.log('this is err')});



