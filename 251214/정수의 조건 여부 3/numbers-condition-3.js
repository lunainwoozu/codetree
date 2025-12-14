const fs = require('fs');
const a = fs.readFileSync(0);

if (a % 13 === 0 || a % 19 === 0){
    console.log('True');
} else {
    console.log('False');
}