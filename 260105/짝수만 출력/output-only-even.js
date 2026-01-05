const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

while (a <= b){
    process.stdout.write(a + ' ');
    a += 2;
}