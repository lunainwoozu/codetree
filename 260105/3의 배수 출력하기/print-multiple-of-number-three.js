const fs = require('fs');
const n = Number(fs.readFileSync(0));

let i = 3;

while (i <= n){
    process.stdout.write(i + ' ');
    i += 3;
}