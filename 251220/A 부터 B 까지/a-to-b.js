const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let A = Number(input[0]);
let B = Number(input[1]);

let result = "";

while (A <= B) {
    result += A + " ";
    if (A % 2 === 0){
        A = A + 3;
    } else {
        A = A * 2;
    }
}

console.log(result);