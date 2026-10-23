const prmopt=require("prompt-sync")();
let value=prmopt("enter the number:");

let arr=value.trim().split(/\s+/).map(Number);

arr.sort((a,b)=>a-b);
console.log(arr.join(' '));