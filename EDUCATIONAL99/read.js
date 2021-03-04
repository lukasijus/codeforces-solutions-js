const fs = require('fs'); 
const path = require('path');
const d = require('./a');
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

                            const [n,x] = data.shift().split(' ').map(Number);

                            const arr = data.shift().split(' ').map(Number);

                            const res = d(n,x, arr);

                            console.log(res);
                        } 
                    }
                })
            }
        })
    }
})
