const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [mathA, engA] = input[0].split(' ').map(Number);
const [mathB, engB] = input[1].split(' ').map(Number);

if (mathA == mathB){
    if (engA > engB){
        console.log('A');
    } else {
        console.log('B');
    }
} else {
    if (mathA > mathB){
        console.log('A');
    } else {
        console.log('B');
    }
}