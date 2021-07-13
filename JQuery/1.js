$(document).ready(function () { //在 DOM 加载完成后才可以对 DOM 进行操作
    $("#p1").click(function () {
        alert('您的鼠标移到了 id="p1" 的元素上!');
    });
    $("#myBtn").on('click',function(){
        alert("you touch me");
    })
    })
  

}); 

