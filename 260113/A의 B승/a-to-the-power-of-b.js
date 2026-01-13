const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let prod = a;

for (let i = 1; i < b; i++) {
    if (b === 0) break;
    prod = prod * a;
}

console.log(prod);