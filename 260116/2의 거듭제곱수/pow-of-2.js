const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = 1; i <= 10; i++) {
    if (2 ** i === n) {
        console.log(i);
        break;
    } else {
        continue;
    }
}