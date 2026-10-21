let statuses=["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[-1]);
console.log(statuses.at(-4));
console.log(statuses.at(-5));

//modify

statuses[2]="blocked";
console.log(statuses);

console.log(statuses.length);