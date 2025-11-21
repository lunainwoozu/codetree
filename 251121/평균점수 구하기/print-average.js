const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(" ");

let con = 0;
arr.forEach((n) => {
    let m = Number(n);
    con += m;
})

let ave = (con / arr.length).toFixed(1);

console.log(ave)