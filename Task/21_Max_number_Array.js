
const prompt = require("prompt-sync")();

let values = prompt("Enter the numbers: ");

let arr = values.trim().split(/\s+/).map(Number);

let maxNumber = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}

console.log("Maximum number:", maxNumber);
