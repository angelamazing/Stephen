
class ChangeData {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}



function changeData() {

    let changeData = new ChangeData();

    $('#changeData').click(() => {
        let id = Number($('#id1').val());
        changeData.title = $('#id2').val();
        changeData.content = $('#id3').val();
        console.log(id);
        console.log(changeData);
  
        fetch(`http://127.0.0.1:3000/api/blog/update?id=${id}`, {
            method: 'POST',
            headers: {

                "Content-Type": "application/json",
            },
            Connection: 'keep-alive',

            body: JSON.stringify(changeData),

        }).then(response => {
            return response.json();
        }).then(data => console.log(data))
    })


}

function clickRead(i) {
    $(`#demo${i}`).click(() => {
        fetch(`http://127.0.0.1:3000/api/blog/detail?id=${i}`).then(response => {
            return response.json();
        }).then(myjson => {
            let i = 1;
                    
            for (let item in myjson['data'])
                 $(`div li:nth-child(${i++})`).children().text(myjson['data'][item]); 
                 
        })
    })
}
