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
        const a0 = a.filter(num => num < 0);
        const a1 = a.filter(num => num >= 0);
        const b0 = b.filter(num => num < 0);
        const b1= b.filter(num => num >= 0);
        const a0_filter = a0.filter(num => num >= b0[0]);
        const b0_filter = b0.filter(num => num <= a0_filter[a0_filter.length - 1])
        const a00_filter = a0_filter.map(num => num *-1);
        const b00_filter = b0_filter.map(num => num *-1);
        const a1_filter = a1.filter(num => num <= b1[b1.length - 1]);
        const b1_filter = b1.filter(num => num >= a1_filter[0]);
        console.log(count1(a00_filter.sort((a,b) => a - b), b00_filter.sort((a,b) => a - b),1) + count1(a1_filter, b1_filter,1) );
    }
});
 
function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 
function readLine() { 
        return data[currentLine++];
}
 
function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

function count1(a,b,opt = 0){
    if(a.length === 0 || b.length === 0) return 0;
    let globalMax = 0;
    const setB = new Set([...b]);
    const setA = new Set([...a]);
    let good_pos = intersection(setA, setB)
    let good_len = good_pos.size;
    const start_time = new Date();
    let j =0;
    let i = 0;
    let b_start = 0;
    while(i < b.length){
        // console.log('here', 'curr = ', j, 'b_start  = ', b_start, 'b_end = ', i)
        while(j < a.length && a[j] <= b[i]){
            // console.log(`curr = ${j}, good_len = ${good_len}`)
            if(good_pos.has(a[j])){
                good_len -= 1;
            }
            j += 1;
        }
        while(b_start < i && b[b_start] + j <= b[i]){
            b_start += 1
        }

        globalMax = Math.max(globalMax, Math.min(i - b_start + 1, j) + good_len);
        // console.log(`globalMax+ = ${globalMax}`)
        i++;
    }
    // console.log(`finish in: ${new Date() - start_time} with ${globalMax} `)
    return globalMax;
}
 
module.exports = count1