//normal function
function validateStatusCode(status)
{
    if(status>200 && status<300)
    {
        console.log("Request is fine");
    }
}
//validateStatusCode(201);
validateStatusCode(201);

//arrow function
const validateStatus= (status1)=>{
    if(status1>=200 && status1<300)
    {
        console.log("good request");
    }
}
validateStatus(202);

//function as expression 
let statusValidation = function(status2)
{
     if(status2>=200 && status2<300)
    {
        console.log("good request");
    }
}
statusValidation(204);

let statusValidation1 = function()
{
     if(status3>=200 && status3<300)
    {
        console.log("good");
    }
}
statusValidation(204);