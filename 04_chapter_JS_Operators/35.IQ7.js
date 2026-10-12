let statusCode = 404;
let category = statusCode < 300 ? "success" :
statusCode < 400 ? "redirect" :
statusCode < 500 ? "clientError": "Server Error";
console.log(`status ${statusCode}: ${category}`);