const fs = require('fs');
const n = Number(fs.readFileSync(0));
let cnt = n;
let bool = true;
    
for (let i = 1; i < n * 2; i++) {
    str = '';
    if(i === n) bool = false;

    for (let j = 0; j < cnt; j++) {
        str += '* ';
    }

    if (bool) {
        cnt--;
    } else {
        cnt++;
    }
    console.log(str);
}