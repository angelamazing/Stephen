//Set也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。

var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"} 重复元素在Set中自动被过滤

s.add(4);
s; // Set {1, 2, 3, 4}
s.add(4);   
s; // 仍然是 Set {1, 2, 3, 4}

var s = new Set([1, 2, 3]);
s; // Set {1, 2, 3}
s.delete(3);
s; // Set {1, 2}