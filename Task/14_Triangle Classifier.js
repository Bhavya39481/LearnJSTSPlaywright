const data = require("prompt-sync").trim().split(/\s+/).map(Number)();
const a = data[0];
const b = data[1];
const c = data[2];
let values=data("enter the values");
if(a==b && a==c)
{
    console.log("Equilateral");
}
else if(a==b || b==c || c==a ){
    console.log("Isosceles");
}
else{
    console.log("Scalene");
}