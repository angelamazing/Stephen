new Promise(function(res,rej){
    setTimeout(() => {
        console.log("first");
        res(10);
    }, 10);
}).then(function(val){
    console.log(val);
    return new Promise((res,rej)=>{
        console.log("second");
        res(20);
    })
}).then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
}).finally(function(){
    console.log("10");
}) 

