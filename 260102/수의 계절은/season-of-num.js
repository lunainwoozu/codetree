const fs = require('fs');
const n = Number(fs.readFileSync(0));

if (n <= 2 || n === 12){
    console.log('Winter');
} else if (n <= 5){
    console.log('Spring');
} else if (n <= 8){
    console.log('Summer');
} else {
    console.log('Fall');
}