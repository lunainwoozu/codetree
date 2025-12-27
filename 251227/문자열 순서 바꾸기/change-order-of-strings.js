const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [S, T] = [input[0], input[1]]

console.log(`${T}
${S}`)