const fs = require('fs');
const n = Number(fs.readFileSync(0));

let cnt = 0;

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        cnt++;
    }
}

if (cnt === 2) {
    console.log('P');
} else {
    console.log('C');
}