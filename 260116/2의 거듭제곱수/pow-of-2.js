const fs = require('fs');
let n = Number(fs.readFileSync(0));

let i = 1;
let cnt = 0;

while (n > 1) {
    n = Math.floor(n / 2);
    i++;
    cnt++;
}

console.log(cnt);