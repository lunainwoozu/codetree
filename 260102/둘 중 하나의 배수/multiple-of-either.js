const fs = require('fs');
const a = Number(fs.readFileSync(0));

console.log(a % 3 === 0 || a % 5 === 0 ? 1 : 0);