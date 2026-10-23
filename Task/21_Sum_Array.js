const prompt=require("prompt-sync")();

const values=prompt("enter the values:");

let arr = values.trim().split(/\s+/).map(Number);
let sum=arr[0];
for(let i=1; i<arr.length;i++)
{
    sum=sum+arr[i];
}
console.log(sum);