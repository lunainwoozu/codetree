const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let result = true;

for (let i = 0; i < 5; i++) {
    let n = input[i];
    if (n % 3 !== 0) {
        result = false;
        break;
    }
}

console.log(result? 1 : 0)