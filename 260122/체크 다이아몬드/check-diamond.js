const fs = require('fs');
const n = Number(fs.readFileSync(0));

for (let i = 0; i < n; i++) {
    str = '';
    for (let j = 0; j < n-(i+1); j++) {
        str += ' ';
    }
    for (let j = 0; j < i+1; j++) {
        str += '* ';
    }
    console.log(str);
}

for (let i = n; i > 1; i--) {
    str = '';
    for (let j = 0; j < n-i+1; j++) {
        str += ' ';
    }
    for (let j = 0; j < i-1; j++) {
        str += '* ';
    }
    console.log(str);
}