const fs = require('fs');
const number = Number(fs.readFileSync(0));

if (number === 1){
    console.log('John');
} else if (number === 2){
    console.log('Tom');
} else if (number === 3){
    console.log('Paul');
} else {
    console.log('Vacancy');
}