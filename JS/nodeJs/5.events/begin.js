const EventEmitter = require('events');
class Man extends EventEmitter { }
const man = new Man();
let buyPack = () => {
    console.log('买包');
}
let buyCar = () => {
    console.log('买车');
}
man.on('有钱了', buyPack);//可以多次触发
man.on('有钱了', buyCar);

man.emit('有钱了'); // 买包 、 买车
man.emit('有钱了'); // 买包 、 买车