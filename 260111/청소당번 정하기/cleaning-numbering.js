const fs = require('fs');
const n = Number(fs.readFileSync(0));

let [c2, c3, c12] = [0, 0, 0];

for (let i = 1; i <= n; i++){
    if (i % 12 === 0) {
        c12++;
    } else if (i % 3 === 0) {
        c3++;
    } else if (i % 2 === 0) {
        c2++;
    }
}

console.log(c2, c3, c12);