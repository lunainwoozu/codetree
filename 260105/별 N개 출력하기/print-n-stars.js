const fs = require('fs');
let n = Number(fs.readFileSync(0));

while (n > 0){
    console.log('*');
    n--;
}