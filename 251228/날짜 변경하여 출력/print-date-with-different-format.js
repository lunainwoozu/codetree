const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('.');

let [yyyy, mm, dd] = [input[0],input[1],input[2]]

console.log(`${mm}-${dd}-${yyyy}`)