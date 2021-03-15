const func = require('./b');
const c = require('./c');
const fs = require('fs'); 
const path = require('path');


fs.readdir(__dirname, (err, files) => {
     if(err) console.log('coulnd not read directory')
     else{
        files.forEach(file => {
            if(file === 'input.txt'){
                fs.readFile(path.join(__dirname,file), 'utf-8', (err, data) =>{
                    if(err) console.log('could not read file')
                    else {
                        data = data.split('\r\n')
                        // console.log(data, data.length)
                        const test = data.shift()
                        const start = new Date();
                        for(let t = 1; t <= test; t++){
                            const [n,m] = data.shift().split(' ').map(Number); 
                            const a = data.shift().split(' ').map(Number);
                            
                            const b = data.shift().split(' ').map(Number);
                            const start2 = new Date();
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
                            // console.log(`filter arrays finnish time: ${new Date() - start2} ms`)
                            console.log('testCase:', t, ': ', c(a00_filter.sort((a,b) => a - b), b00_filter.sort((a,b) => a - b),1) + c(a1_filter, b1_filter,1) );
                            // console.log('testCase:', t, ': ', c(a, b,0) + c(a, b,1) );
                        } 
                        const end = new Date();
                        console.log(`finishi in: ${end - start} ms`)
                    }
                })
            }
        })
    }
})
