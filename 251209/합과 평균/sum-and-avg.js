const fs = require('fs');
let ns = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(ns[0]);
let b = Number(ns[1]);
let total = a + b;
let average = (a + b) / 2;

console.log(total, average.toFixed(1));