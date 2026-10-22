let original =[1,2,3,4];

//new array will be create
let copy=[...original];
console.log(original);
console.log(copy);

//new array will be create
console.log(copy.slice(2,4));

//original array will be modified
let deep_copy_array=original;
deep_copy_array.push(91);
console.log(deep_copy_array);