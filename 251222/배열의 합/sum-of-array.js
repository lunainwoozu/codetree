const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < 4; i++){
    let array = input[i].split(' ').map(Number);
    let sum = 0;
    for (let j = 0; j < 4; j++){
        sum += array[j];
    }
    console.log(sum);
}