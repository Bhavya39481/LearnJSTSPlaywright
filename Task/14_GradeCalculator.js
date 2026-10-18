const prompt = require("prompt-sync")();

let data = prompt("enter the number");
if (data < 0 || data > 100) {
console.log(`invalid score, ${data}`);
} 

else {
    if (data >= 90) {
        console.log("A");
    }
    else if (data >= 80 && data <= 89) {
        console.log("B");
    }
    else if (data >= 70 && data <= 79) {
        console.log("C");
    }
    else if (data >= 60 && data <= 69) {
        console.log("D");
    }
    else
    {
        console.log("F");

    }   
}