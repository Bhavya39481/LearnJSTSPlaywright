//normal fn 

function name()
{
    console.log("This is normal function with no arg/return type");
}

name();

//IIFE fn 

(function()
{
    console.log("this is IIFE annonymous fn");
}) ();

(function ()
{
    console.log("another example");
})();

//IIFE arrow fn

(() => {
    console.log("IIFE arrow");
}) ();