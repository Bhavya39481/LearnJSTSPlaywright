const prompt = require("prompt-sync")();
const value1 =prompt("enter the first word").trim().toLocaleLowerCase();
const value2 =prompt("enter the second word");

//let s1=value1.trim().toLocaleLowerCase();
//let s2=value2.trim().toLocaleLowerCase();

// Convert strings into arrays, sort and join
let sorted1 = value1.split('').sort().join('');
let sorted2 = s2.split('').sort().join('');

// Compare both strings
if (sorted1 === sorted2) {
    console.log("YES");
} else {
    console.log("NO");
}