const fs = require('fs');
const n = Number(fs.readFileSync(0));

let i = 1;

while (i < n + 1){
    process.stdout.write(i + ' ');
    i++
}