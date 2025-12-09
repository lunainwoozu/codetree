const fs = require('fs');
let ns = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(ns[0]);
let b = Number(ns[1]);
let c = Number(ns[2]);

let total = a+b+c;
let average = (total)/3;

console.log(total);
console.log(average);
console.log(total - average);