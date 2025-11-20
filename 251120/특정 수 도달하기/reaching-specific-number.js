const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let add = 0;
let slash = 0;

for (let a of arr){
    let b = Number(a);
    if (b > 250) break;
    add += b;
    slash += 1;
}

let av = (add / slash).toFixed(1);

console.log(add + " " + av);