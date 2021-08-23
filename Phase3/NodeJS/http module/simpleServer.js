//load the module
let http = require("http");
let server = http.createServer((request, response)=>{
    response.end("Welcome to http module simple server example");
});
server.listen(9090, ()=>console.log("server is running on port number 9090"));

/*run the program with node filename.js
open web browser and use url --> http://localhost:9090 */