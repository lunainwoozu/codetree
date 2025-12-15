const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = [a, b];

for (let i = 0; c.length < 10 ; i++){
    if (c[i] + c[i+1] < 10) {
        c.push(c[i] + c[i+1]);
    } else {
        c.push(c[i] + c[i+1] - 10);
    }
}

console.log(c.join(" "))