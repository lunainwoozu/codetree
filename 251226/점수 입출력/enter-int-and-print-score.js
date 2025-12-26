const fs = require('fs');
const n = Number(fs.readFileSync(0));

console.log(`Your score is ${n} point.`)