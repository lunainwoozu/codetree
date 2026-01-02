const fs = require('fs');
const [m, e] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if (m < 90 || e < 90){
    console.log(0);
} else if (e >= 95){
    console.log(100000);
} else if (e >= 90){
    console.log(50000);
}