
//all should be pass
let arr=[80,75,90];
console.log(arr.every(s=>s>70));

console.log(arr.every(s=>s>75));

//atleast one should be pass
console.log(arr.some(s=>s>75));