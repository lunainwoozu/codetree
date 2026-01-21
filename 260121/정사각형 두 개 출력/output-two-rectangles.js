const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = 0; i < n * 2 + 1; i++) {
    str = "";
    if (i === n) {
        console.log(" ");
    } else {
        for (let j = 0; j < n; j++) {
            str += "*";
        }
        console.log(str);
    }
}