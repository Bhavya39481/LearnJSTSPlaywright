const prompt = require("prompt-sync")();

let size = Number(prompt("How many numbers? "));
let arr = prompt("Enter the numbers: ")
    .trim()
    .split(/\s+/)
    .map(Number);

for (let i = 0; i < arr.length; i++) {
    let alreadyCounted = false;

    // Check whether this number appeared earlier
    for (let j = 0; j < i; j++) {
        if (arr[i] === arr[j]) {
            alreadyCounted = true;
            break;
        }
    }

    // Count and print it only if this is its first appearance
    if (!alreadyCounted) {
        let frequency = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                frequency++;
            }
        }

        console.log(arr[i] + " appears " + frequency + " times");
    }
}