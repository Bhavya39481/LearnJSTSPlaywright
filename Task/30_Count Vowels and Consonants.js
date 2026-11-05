const prompt = require("prompt-sync")();
const value = prompt("enter the word");

let word = value.trim().toLowerCase();

let vowels=0;
let consonants =0;

for(let i =0; i<word.length; i++)
{
    let ch=word[i];

    if(ch>='a' && ch<='z')
    {
        if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u')
        {
            vowels++;
        }
        else{
            consonants++;
        }
    }
}

console.log("vowels:", vowels);
console.log("consonants:", consonants);
