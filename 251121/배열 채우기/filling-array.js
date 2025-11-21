const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(" ");

let newArr = []

for(let a of arr) {
    let b = Number(a)
    if (b !== 0){
        newArr.push(b)
    } else {
        break;
    }
}

console.log(newArr.reverse().join(" "));
