const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input.map(Number);

a += 87;
b %= 10;

console.log(a);
console.log(b);