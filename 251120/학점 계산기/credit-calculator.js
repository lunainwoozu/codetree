const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let point = 0;

arr.forEach((n) => {
    point += n
})

let average = (point / arr.length).toFixed(1);

if (average >= 4.0){
    console.log(average + "\n" + "Perfect")
} else if (average >= 3.0) {
    console.log(average + "\n" + "Good")
} else if (3.0 > average){
    console.log(average + "\n" + "Poor")
}