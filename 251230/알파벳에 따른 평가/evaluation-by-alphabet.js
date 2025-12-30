const fs = require('fs');
const eng = fs.readFileSync(0).toString().trim();

if (eng === 'S'){
    console.log('Superior');
} else if (eng === 'A') {
    console.log('Excellent');
} else if (eng === 'B') {
    console.log('Good');
} else if (eng === 'C') {
    console.log('Usually');
} else if (eng === 'D') {
    console.log('Effort');
} else {
    console.log('Failure');
}