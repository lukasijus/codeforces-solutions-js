const fs = require('fs'); 
const path = require('path');

fs.readdir(__dirname, (err, files) => {
     if(err) console.log('coulnd not read directory')
     else{
        files.forEach(file => {
            if(file === 'distance.txt'){
                fs.readFile(path.join(__dirname,file), 'utf-8', (err, data) =>{
                    if(err) console.log('could not read file')
                    else {
                        data = data.split('\r\n')
                        // console.log(data, data.length)
                        const test = data.shift()
                        for(let t = 1; t <= test; t++){
                            const n = Number(data.shift())
                            const arr = data.shift().split(' ').map(Number)
                            // console.log('n = ', n, 'arr = ', arr)
                            let x = Math.round(arr.reduce((a,b) => a + b) / n);
                            let goerge_med1 = new Array(n).fill(x)
                            cnt = 1
                            let goerge_med2 = new Array(n).fill(x - cnt)
                            let goerge_med3 = new Array(n).fill(x + cnt)
                            min1 = 0
                            min11 = 0 
                            min12 = 0
                            for(let i = 0; i < n ; i++){
                                console.log(min1, i)
                                if(isNaN(min1))
                                {
                                    console.log(min1, i)
                                    break;
                                }
                                min1 = min1 + Math.abs(arr[i] - goerge_med1[i])
                                min11 = min11 + Math.abs(arr[i] - goerge_med2[i])
                                min12 = min12 + Math.abs(arr[i] - goerge_med3[i])
                            }
                            console.log(min1)
                            if( min1 > min11)
                            {
                                while (true)
                                {
                                    cnt++;
                                    goerge_med2 = new Array(n).fill(x - cnt)
                                    let calc_min = 0
                                    for(let i  = 0;  i < n; i++)
                                    {
                                        calc_min = calc_min + Math.abs(arr[i] - goerge_med2[i])
                                    }
                                    if (calc_min > min11){
                                        break;
                                    }
                                    else
                                    {
                                        min11 = calc_min
                                    }
                                }
                                console.log(min11)
                            }
                            else if ( min1 > min12)
                            {
                                while (true)
                                {
                                    cnt++;
                                    goerge_med3 = new Array(n).fill(x + cnt)
                                    let calc_min = 0
                                    for(let i  = 0;  i < n; i++)
                                    {
                                        calc_min = calc_min + Math.abs(arr[i] - goerge_med3[i])
                                    }
                                    if (calc_min > min11){
                                        break;
                                    }
                                    else
                                    {
                                        min12 = calc_min
                                    }
                                }
                                console.log(local_min, x + cnt)
                            }
                            else
                            {
                                console.log(min1)
                            }

                        } 
                    }
                })
            }
        })
    }
})
