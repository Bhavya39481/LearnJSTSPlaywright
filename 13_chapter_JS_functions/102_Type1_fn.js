//type1-no args. no para, no return 

function openBrowser()
{
    console.log("Please open the browser");
}

openBrowser();

//we can call function n number of time 
openBrowser();
openBrowser();
openBrowser();


//If i try to print the value here, I will get undefined beacuse there is no return type here

let browser = openBrowser();
console.log(browser);