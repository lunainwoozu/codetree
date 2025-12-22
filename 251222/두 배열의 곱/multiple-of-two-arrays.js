const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const rows = 3;
const cols = 3;

let matrix = [];
let matrix2 = [];

for(let i = 0; i < rows; i++){
    const rowData = input[i].split(' ').map(Number);
    matrix.push(rowData);
}
for(let i = rows + 1; i <= rows * 2; i++){
    const rowData = input[i].split(' ').map(Number);
    matrix2.push(rowData);
}

for (let i = 0; i < rows; i++){
    let str = '';
    for (let j = 0; j < cols; j++){
        str += matrix[i][j] * matrix2[i][j] + ' ';
    }
    console.log(str);
}