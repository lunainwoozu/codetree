const fs = require('fs');
const N = Number(fs.readFileSync(0));

if (N >= 80){
    console.log('pass');
} else {
    console.log(`${80 - N} more score`)
}