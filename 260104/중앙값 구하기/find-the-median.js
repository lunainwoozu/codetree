const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

if (a > b && a > c){
    if (b > c){
        console.log(b);
    } else {
        console.log(c);
    }
} else if (b > a && b > c){
    if (a > c){
        console.log(a)
    } else {
        console.log(c)
    }
} else if (c > a && c > b){
    if (a > b){
        console.log(a)
    } else {
        console.log(b)
    }
}