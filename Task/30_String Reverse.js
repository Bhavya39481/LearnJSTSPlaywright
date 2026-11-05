const prompt = require("prompt-sync")();
const value =prompt("enter the word");
let  word=value.trim();
let reverse="";
for(let i=word.length-1; i>=0;i--)
{
    reverse=reverse+word[i];
}
console.log(reverse);