const fs = require('fs');
let N = Number(fs.readFileSync(0));
let result = 0;

for (let i = 1; i < N + 1; i++){
    result += i;
    if (result >= N){
        console.log(i);
        break;
    }
}