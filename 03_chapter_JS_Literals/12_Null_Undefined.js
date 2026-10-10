/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
*/

//undefined

var x;
console.log(x); //undefined


let userName; //declared but not assigned any value
console.log(userName); //undefined
console.log(typeof userName); //undefined


function hi()
{
    //no return statement, so it will return undefined
}
console.log(hi()); //undefined


let x;
x=10;
console.log(x);


//null
var benz=null;
console.log(benz); //null

let profilePic=null;
console.log(profilePic); //null
console.log(typeof profilePic);


/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/

