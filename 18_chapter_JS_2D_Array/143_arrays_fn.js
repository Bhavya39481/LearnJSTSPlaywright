let scores=[
    [89,78,75],
    [65,72,56],
    [45,26,87]
];
let rowSum=scores.map(row=>row.reduce((a,b)=>a+b));
console.log(rowSum);
