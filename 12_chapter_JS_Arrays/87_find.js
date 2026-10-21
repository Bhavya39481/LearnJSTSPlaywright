let nums =[10, 20, 25, 30,35];
let results = nums.find(temp=>temp>25);
console.log(results);

let results1 = nums.findIndex(n => n>=35);
console.log(results1);

let results2 = nums.findLast(a=> a>=26);
console.log(results2);

let results3 = nums.findLast(a=> a>35);
console.log(results3);


let results4=nums.findLastIndex(b=>b>10);
console.log(results4);

let results5=nums.findLastIndex(b=>b>35);
console.log(results5);