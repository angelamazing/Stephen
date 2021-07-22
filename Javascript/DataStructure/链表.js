function Node(data, next){//节点结构
    this.data=data;
    this.next=next;
}

function fnCreateNode(data,next)//构造节点
{
    var p= new Node(data,next);
    return p;
}

function funInsertLast(head,arr)//尾部插入数据
{
    var p=head;
    while(p.next!=null)
    {
        p=p.next;
    }//循环外面p已经指向最后一个节点
   

    if(!arr.length)//增加非数组操作
    {
        var newNode=fnCreateNode(arr,null);
        p.next=newNode;
    }


    for(let i=0;i<arr.length;i++)//数组操作
    {
        var newNode=fnCreateNode(arr[i],null);
        p.next=newNode;
        p=p.next;
    }
}

function fnShowList(head)//链表显示操作
{
    var p=head;
    while(p!=null)
    {
        console.log(p.data);
        p=p.next;
    }
}

function fnGetListLength(head)//获取链表长度(不包含头结点)
{
    var i=0;
    var p=head;
    while(p.next!=null) {i++;p=p.next;}
    return i;
}

function fnDeleteLast(head)//删除链表尾部节点
{
    var pre=head;
    var p=pre.next;
    if(p==null) return err;
    while(p.next!=null)
    {
        p=p.next;
        pre=pre.next;
    }
    pre.next=null;
    p=null;
}

function fnInsert(head,arr)

var head = fnCreateNode("head",null);
var arr=[1,3,4,52,25,6];
arr=arr.sort(
    (x,y)=>{
        if(x>y) return 1;
        else return -1;
    }
);
funInsertLast(head,arr);
var howLong=fnGetListLength(head);
console.log(howLong);
fnShowList(head);

fnDeleteLast(head);
fnShowList(head);

