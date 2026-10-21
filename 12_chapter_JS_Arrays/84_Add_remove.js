let arr=[1,2,3];
console.log(arr.length);

//add the element at the end
arr.push(4);
console.log(arr);

//remove the element from the end
arr.pop();
console.log(arr);

//how to add/push multiple elements at the end
arr.push(5,6);
console.log(arr);

//this is invalid, pop will never use arguement but still it removes last element
// arr.pop(5,5);
// console.log(arr);


//how to add element to the begginging

let arr2=[1,2,3];
arr2.unshift(5,6);
console.log(arr2);

arr.shift();
console.log(arr);

let arr1=[];
arr1.shift();
console.log(arr1);

//spice - remove the element

let arr3=[1,2,3,4,5];
arr3.splice(2,1);
console.log(arr3);

let arr4=[1,2,3,4,5];
arr4.splice(3,0,56);
console.log(arr4);

let arr5=[1,2,3,4,5];
arr5.splice(2,1,56);
console.log(arr5);

let arr6=[1,2,99,5,6];
arr6.splice(1,2,10,20);
console.log(arr6);