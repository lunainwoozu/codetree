const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = n; i > 0; i--) {
    str = '';
    for (let j = 0; j < n - i; j++) {
        str += "  ";
    }
    for (let j = 0; j < i * 2 - 1; j++) {
        str += "* ";
    }
    console.log(str);
}