//resolve
let apiCall= new Promise(function(resolve, reject){
    resolve({status:200, body:"user-data"});
})

apiCall.then(function(response){
    console.log(response);
});

//reject

let testRun = new Promise(function(resolve, reject){
    reject("Assertion failed");
});
testRun.then(function(data){
    cosnole.log(data);
}).catch(function(error){
    console.log(error);
});