const prompt = require("prompt-sync")();
const value =prompt("enter the value");
let word =value.trim().toLowerCase();

let reverse="";
for(let i=word.length-1; i>=0; i--)
{
    reverse=reverse+word[i];
}
if(word===reverse)
{
    console.log("YES");
}else
{
    console.log("NO");
}