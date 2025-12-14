const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let result = '';

for (let i = 0; i < (b - a + 1); i++){
    result += (b - i + ' ')
}

console.log(a === b ? b : result)