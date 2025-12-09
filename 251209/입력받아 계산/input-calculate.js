const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());
let con = a + 2
console.log(con)