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
    data = data.split('\r\n');
    const [n, k ] = get_ints();
    const arr = get_ints();

    console.log(count);
}
 
function get_ints() { 
    return data.shift().split(' ').map(Number)}