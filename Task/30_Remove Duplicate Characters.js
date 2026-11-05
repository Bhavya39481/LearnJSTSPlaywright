const prompt = require("prompt-sync")();
const value =prompt("enter the word");
let  word=value.trim();

let result="";
for(let i=0; i<=word.length-1;i++){
   if(!result.includes(word[i]))
   {
    result=result+word[i];
   }

}
console.log(result);
