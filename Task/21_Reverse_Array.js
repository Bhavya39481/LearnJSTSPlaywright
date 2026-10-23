const prompt = require("prompt-sync")();

let values = prompt("Enter the numbers: ");

let arr = values.trim().split(/\s+/).map(Number);

let reverse_number = [];

for (let i =arr.length-1; i>=0; i--) {
    reverse_number.push(arr[i]);
}
console.log(reverse_number.join(' '));