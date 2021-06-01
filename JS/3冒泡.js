var a=[1,7,8,2,6];

for(var i=a.length;i>=2;i--)
{
    var judge=0;
    for(var j=1;j<=i-1;j++)
    {
           if(a[j]>a[j+1])
               {
                   var temp;
                   temp=a[j];
                   a[j]=a[j+1];
                   a[j+1]=temp;
                   judge=1;       
                }
    }
    if(judge==0) break;
}
console.log(a);