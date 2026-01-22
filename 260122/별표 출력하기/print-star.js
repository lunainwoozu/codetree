const fs = require('fs');
const n = Number(fs.readFileSync(0));
let arr = [];
let cnt = 0;

for (let i = 0; i < n * 2 - 1; i++) {
    str = "";
    if (i < n) {
        cnt++;
    } else {
        cnt--;
    }

    for (let j = 0; j < cnt; j++) {
        arr.push("*");
    }

    console.log(arr.join(" "));
}