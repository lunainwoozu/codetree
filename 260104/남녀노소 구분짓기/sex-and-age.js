const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const s = parseInt(input[0]);
const a = input[1];

if (a >= 19){
    if (s === 0){
        console.log('MAN');
    } else {
        console.log('WOMAN');
    }
} else {
    if (s === 0){
        console.log('BOY');
    } else {
        console.log('GIRL');
    }
}