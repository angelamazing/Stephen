function p1(){
    return new Promise(function(res,rej){
        res(1);
    })
}
function p2(){
    return new Promise(function(res,rej){
        res(2);
    })
}
function p3(){
    return new Promise(function(res,rej){
        res(3);
    })
}

Promise.all([p1(),p2(),p3()]).then(data=>console.log(data)).catch(err=>console.log(err));