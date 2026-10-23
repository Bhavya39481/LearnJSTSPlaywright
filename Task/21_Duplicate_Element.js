const prompt= require("prompt-sync")();
let values = prompt("enter the numbers:");
let arr = values.trim().split(/\s+/).map(Number);

/**let check = [];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
    if (check.includes(arr[i])) {
        if (!duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    } else {
        check.push(arr[i]);
    }
}

console.log(duplicates.join(" ")); **/

let check = new Set();
let duplicates = new Set();

for (let i = 0; i < arr.length; i++) {
    if (check.has(arr[i])) {
        duplicates.add(arr[i]);
									
		 
    } else {
        check.add(arr[i]);
    }
}

if (duplicates.size === 0) {
    console.log("No duplicates found");
} else {

    console.log([...duplicates].join(" "));
}
