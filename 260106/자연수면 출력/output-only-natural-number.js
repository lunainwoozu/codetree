const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if (a > 0){
    for(let i = 1; i <= b; i++){
        process.stdout.write(a + '')
    }
} else {
    console.log(0)
}