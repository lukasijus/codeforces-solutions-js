const solution = require('./solution');

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
                        const test = data.shift()
                        for(let t = 1; t <= test; t++){
                            const [n,k] = data.shift().split(' ').map(Number);
                            console.log(solution(n,k))
                        } 
                    }
                })
            }
        })
    }
})
