
const fs = require('fs');

function readdir(path) {
    return new Promise(function (res, rej) {
        fs.readdir(path, 'utf-8', (err, data) => {
            if (err) rej(err);
            else res(data);
        })
    })
}
function readfile(path){
    return new Promise(function(res,rej){
        fs.readFile(path,'utf-8',(err,data)=>
        {
            if(err) rej(err);
            else res(data);
        })
    })
}
async function dir(path) {

    var data = await  readdir(path)
    console.log(data);
    var result =await readfile('./sample.txt');

    return result;
}

dir('./').then(data=>console.log(data))





