const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let prod = 1;

if (b > 0) {
    console.log(a ** b);
} else {
    console.log(prod);
}