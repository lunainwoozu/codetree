const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

for(let i = a; i <= b; i += 2){
    process.stdout.write(i + ' ');
}