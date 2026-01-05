const fs = require('fs');
const n = Number(fs.readFileSync(0));

for(let i = n; i >= 1; i--){
    process.stdout.write(i + ' ');
}