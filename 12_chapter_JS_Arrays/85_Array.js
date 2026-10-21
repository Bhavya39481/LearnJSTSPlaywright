let browser =['chrome', 'edge', 'opera','safari', 'firefox'];
// browser.pop();
// console.log(browser);

// let removed = browser.shift();
// console.log(removed);

// console.log(browser);


for (let i=0; i<browser.length;i++)
{
    console.log(browser[i]);
    if(browser[i]==='opera')
    {
        console.log("opera is exist");
    }
    else
    {
        console.log("opera does not exist");
    }
}