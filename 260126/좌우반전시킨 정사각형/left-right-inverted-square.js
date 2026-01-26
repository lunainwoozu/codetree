const fs = require("fs");
const n = Number(fs.readFileSync(0));

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = n; j > 0; j--) {
        str += i*j + " ";
    }
    console.log(str);
}