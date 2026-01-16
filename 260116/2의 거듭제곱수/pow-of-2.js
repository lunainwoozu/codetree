const fs = require('fs');
const n = Number(fs.readFileSync(0));

let i = 1;
let cnt = 0;

while (true) {
    if (n === 2 ** i) {
        console.log(cnt);
        break;
    } else {
        cnt++;
        i++;
    }
}