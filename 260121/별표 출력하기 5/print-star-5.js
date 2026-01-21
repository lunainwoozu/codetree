const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = n; i > 0; i--) {
    str = "";
    for (let j = i; j > 0; j--) {
        for (let k = i; k > 0; k--) {
            str += "*";
        }
        str += " ";
    }
    console.log(str);
}