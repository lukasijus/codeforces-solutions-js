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
    n = Number(data.shift())
    arr = data.shift().split(' ').map(Number)
    // console.log('n = ', n, 'arr = ', arr)
    cnt1 = 0;
    cnt2 = 0;
    max1 = 0;
    max2 = 0;
    stop1 = true;
    stop2 = true;
    j = arr.length -1
    for(let i = 0; i < n; i++)
    {
       //  console.log(arr[i], arr[arr.length - i -1])
        if(i === j)
        {
           if(arr[i] >= max1)
           {
               cnt1++;
               console.log(cnt1 + cnt2);
               break;
           }
           else if(arr[j] >= max2)
           {
               cnt2++;
               console.log(cnt1 + cnt2);
               break;
           }
           else
           {
               console.log(cnt1 + cnt2);
               break;
           }

        }
        if(arr[i] >= max1 && stop1){
            cnt1++;
            max1 = arr[i];
        }
        if(arr[j] >= max2 && stop2){
            cnt2++;
            max2 = arr[j] 
            j--;
        }
        if(max1 > arr[i])
        {
            stop1 = false;
        }
        if(max2 > arr[j]  )
        {
            stop2 = false;
        }
        if(!stop1 && !stop2){
            console.log(cnt1 + cnt2)
            break;
        }
    }

}
 
function get_ints() { 
    return data.shift().split(' ').map(Number)}