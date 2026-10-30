//function with var

// function getStatusCode() {
//     console.log(status_code); //undefined
//     var status_code=200;
//     console.log(status_code);
// }
// getStatusCode();

//function with let
// function getStatusCode() {
//     console.log(status_code); // ref error
//     let status_code=300;
//     console.log(status_code);
// }
// getStatusCode();


//function with const
function getStatusCode() {
    console.log(status_code); // ref error
    const status_code=500;
    console.log(status_code);
}
getStatusCode();