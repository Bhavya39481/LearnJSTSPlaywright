//n=3
//*
//* *
//* * *
const prompt = require("prompt-sync")();
const n =prompt("enter the number");
//let n=3;
for(let i=0; i<n; i++)
{
    for(j=0; j<=i; j++)
    {
        process.stdout.write("*");
    }
    console.log(" ");
}