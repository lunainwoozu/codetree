const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let i = 0;

while (true) {
    let n = input[i];
    if (n % 2 === 0) {
        console.log(Math.floor(n / 2));
    }

    if (i === 3) break;

    i++;
}