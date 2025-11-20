const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

arr = arr.map(Number);

let sum = 0;

arr.forEach((n) => {
    sum += n;
})

console.log(sum)