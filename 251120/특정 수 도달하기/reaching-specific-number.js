const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let add = 0;

for (let a of arr){
    let b = Number(a);
    if (b > 250) break;
    add += b;
}

let av = (add / 5).toFixed(1);

console.log(add + " " + av);