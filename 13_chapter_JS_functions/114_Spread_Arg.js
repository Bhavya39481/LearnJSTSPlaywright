//normal fn
function add(a,b,c)
{
    return a+b+c;
}
let result = add(1,2,3);
console.log(result);

//fn with spread

let num = [2,2,3,4,5];
console.log(add(...num));

//fn with some 

function hasError(...codes)
{
    return codes.some(c=>c>400);
}

let resposneCode=[100, 403, 404];
let responsecode1=[404, 549, 635];
console.log(hasError(...resposneCode));
console.log(hasError(...responsecode1));