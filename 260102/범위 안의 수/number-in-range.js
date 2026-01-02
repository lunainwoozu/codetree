const fs = require('fs');
const a = Number(fs.readFileSync(0));

console.log(1 <= a && a <= 20 ? 'yes' : 'no');