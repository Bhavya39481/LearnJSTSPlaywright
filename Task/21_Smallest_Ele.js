const small= require("prompt-sync")();

let values =small("enter the number: ");

let arr = values.trim().split(/\s+/).map(Number);
let smallest_ele=arr[0];

for(let i =0; i<arr.length; i++)
{
    if(arr[i]<smallest_ele)
    {
        smallest_ele=arr[i];
    }

}
console.log("smallest number is:", smallest_ele);