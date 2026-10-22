//normal or lexicograpic sorting
let nums=[10,1,21,2];
nums.sort((a,b)=>a-b);
console.log(nums);

nums.sort((a,b)=>b-a);
console.log(nums);

//local compare
let fruits=["banana", "cherry", "apple"];
fruits.sort((a,b)=>a.localeCompare(b))
console.log((fruits));