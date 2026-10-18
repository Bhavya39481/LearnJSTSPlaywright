let browser="chrome";
switch(browser)
{
    case "chrome":
    case "edge":
    case "Brave":
    case "opera":
        console.log("chromium project");
        break;

    case "firefox":
        console.log("mozila poject");
        break;

    case "safari":
        console.log("apple browser");
        break;
    
    default:
        console.log("invalid browser");
}