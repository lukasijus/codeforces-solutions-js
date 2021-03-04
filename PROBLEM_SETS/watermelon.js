process.stdin.on('data',c=>{a=Number(c);console.log(c>2&&c%2==0?"YES":"NO")})

process.stdin.resume();
process.stdin.setEncoding('utf8');
 
let data = '';
process.stdin.on('data', chunk => {
data += chunk;
});
 
process.stdin.on('end', () =>{
main();
});
 
function main() {
    const parseInput = data.split('\n');
    let t = parseInt(parseInput.shift());
    while(t--) {
        const word = parseInput.shift().split(' ');
    }
}