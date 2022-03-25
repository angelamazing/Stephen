let url = "https://m.qidian.com/book/1027961464/650724180"

async function getJ(){
    let response = await fetch(url);
    if(response.status==200) {
        let data = response.text();
        return data;
    }
    else throw new Error(response.status);
}
getJ(url).then(data=>console.log(data)).catch(error=>console.log(error));