const fs = require('fs');
let n = Number(fs.readFileSync(0));

for(let i = 1; i <= n; i++){
    str = "";
    for(let j = 1; j <= i; j++){
        str += `${i}`;
        if (j < i) str += " ";
    }
    console.log(str);
}