function* next_id() {
    let id =1;
    while (true) {
     yield id++;
    }    
 
}

var f=next_id();

console.log(f.next().value);
console.log(f.next().value);
console.log(f.next().value);
console.log(f.next().value);
console.log(f.next().value);
console.log(f.next().value);

