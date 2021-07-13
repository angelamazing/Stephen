//this可以用在构造函数之中，表示实例对象。
//this都有一个共同点：它总是返回一个对象。
//this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。

var person = {
    name: '张三',
    describe: function () {
        return '姓名：' + this.name;
    }
};
person.describe();// "姓名：张三"
//由于this.name是在describe方法中调用，而describe方法所在的当前对象是person,因此this指向person

var B = {
    name: '李四'
};
B.describe = A.describe;
B.describe();// "姓名：李四"
/* 可以重构,将函数重构在外部,这样就清晰多了 */

/* 使用场景:
    （1）全局环境 它指的就是顶层对象window
    （2）构造函数 指的是实例对象
    （3）对象的方法 指向就是方法运行时所在的对象
*/
