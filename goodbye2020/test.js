const a = require('./solution');

const fs = require('fs'); 
const path = require('path');

fs.readdir(__dirname, (err, files) => {
     if(err) console.log('coulnd not read directory')
     else{
        files.forEach(file => {
            if(path.extname(file) === '.txt'){
                fs.readFile(path.join(__dirname,file), 'utf-8', (err, data) =>{
                    if(err) console.log('could not read file')
                    else {
                        data = data.split('\r\n')
                        
                        let testCases = parseInt(data.shift());

                        while(testCases--) {

                            const n = parseInt(data.shift());

                            const arr = data.shift().split(' ').map(Number);

                            // const str = data.shift();

                            const res = a(arr);

                            console.log(res)
                        }
                    }
                })
            }
        })
    }
})
