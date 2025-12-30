const fs = require('fs');
const A = Number(fs.readFileSync(0));

console.log(A % 3 === 0 ? 'YES' : 'NO');
console.log(A % 5 === 0 ? 'YES' : 'NO');