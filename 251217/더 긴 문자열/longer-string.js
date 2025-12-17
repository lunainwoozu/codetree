const fs = require('fs');
let word = fs.readFileSync(0).toString().trim().split(' ');

let a = [word[0], word[0].length];
let b = [word[1], word[1].length];

if (word[0].length > word[1].length){
    console.log(a.join(" "));
} else if (word[1].length > word[0].length){
    console.log(b.join(" "))
} else {
    console.log('same')
}