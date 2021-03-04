const a = require('./a');

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
                        console.log(data, data.length)
                        const test = parseInt(data.shift());
                        console.log('test cases', test)
                        for(let t = 1; t <= test; t++){
                            const n = parseInt(data.shift());
                            console.log('n = ', n)
                            // const arr = data.shift()
                            // console.log('arr = ', arr)
                            const res = a(n);
                            console.log(res)
                        } 
                    }
                })
            }
        })
    }
})
function get_ints() { 
    return data.shift().split(' ').map(Number);
}
 