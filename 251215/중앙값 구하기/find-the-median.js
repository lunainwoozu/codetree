const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

if (a > b){
    if (b > c){
        console.log(b);
    } else if (a > c) {
        console.log(c);
    } else {
        console.log(a);
    }
} else {
    if (a > c){
        console.log(a)
    } else if (b > c) {
        console.log(c)
    } else {
        console.log(b)
    }
}