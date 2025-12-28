const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let [A, B] = [Number(input[0]), Number(input[1])]

console.log(A + B);
console.log(A - B);
console.log((A / B).toFixed(0));
console.log(A % B);