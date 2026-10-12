let environment ="Statging";
let baseURL= environment === "prod" ? "https://statging.com" : "https://prod.com";
console.log(baseURL);


let environment1 ="prod";
let baseURL1= environment === "Statging" ? "https://statging.com" : "https://prod.com";
console.log(baseURL1);