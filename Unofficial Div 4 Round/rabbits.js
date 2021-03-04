/*
 * File Created: Wednesday, 25th November 2020 4:18:19 pm
 * Author: Lukas Rimkus
 */
const fs = require('fs'); 
const path = require('path');

fs.readdir(__dirname, (err, files) => {
     if(err) console.log('coulnd not read directory')
     else{
        files.forEach(file => {
            if(file === 'rabbits.txt'){
                fs.readFile(path.join(__dirname,file), 'utf-8', (err, data) =>{
                    if(err) console.log('could not read file')
                    else {
                        data = data.split('\r\n')
                        // console.log(data, data.length)
                        const test = data.shift()
                        for(let t = 1; t <= test; t++){
                             n = Number(data.shift())
                             arr = data.shift().split(' ').map(Number)
                             console.log('n = ', n, 'arr = ', arr)
                             cnt1 = 0;
                             cnt2 = 0;
                             max1 = 0;
                             max2 = 0;
                             stop1 = true;
                             stop2 = true;
                             let j = arr.length -1
                             let i = 0 
                             for(let k = 0; k < n; k++)
                             {
                                //  console.log(arr[i], arr[arr.length - i -1])
                                if(i > j)
                                {
                                    console.log(cnt1 + cnt2);
                                    break;
                                }
                                 if(i === j)
                                 {
                                     console.log('i === j', i, j)
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
                                     i++;
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
                    }
                })
            }
        })
    }
})
