const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const c = input[0];
const n = Number(input[1]);

if(c === 'A'){
    for(let i = 1; i <= n; i++){
        process.stdout.write(i + ' ');
    }
} else {
    for(let i = n; i >= 1; i--){
        process.stdout.write(i + ' ');
    } 
}
