let responseStatus=501;
switch(responseStatus)
{
    case 200:
        console.log("200 ok");
        break;

    case 500:
        console.log("internal server error");
        break;

    case 404:
        console.log("404 not found");
        break;

        default:
            console.log("status code not matching")


}