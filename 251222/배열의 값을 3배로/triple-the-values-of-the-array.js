const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let rows = 3;
let cols = 3;

let matrix = [];

for (let i = 0; i < rows; i++){
    const rowData = input[i].split(' ').map(Number);
    matrix.push(rowData);
}

for (let i = 0; i < rows; i++){
    let str = "";
    for (let j = 0; j < cols; j++){
        str += matrix[i][j] * 3 + " ";
    }
    console.log(str);
}