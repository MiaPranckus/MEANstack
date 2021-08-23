let http = require("http");
let url = require("url");
let server = http.createServer((request, response)=>{
    let urlInfo = url.parse(request.url, true);
    //console.log(urlInfo);
    //console.log("Welcome")
    if(urlInfo != "/favicon.ico"){
        if(urlInfo.path == "/aboutUs"){
            response.write("Welcome to 'About Us' page")
        }else if(urlInfo.path == "/contactUs"){
            response.write("Welcome to 'Contact Us' page");
        }else if(urlInfo.path == "/login"){
            response.write("Welcome to 'Login' page");
        }else{
            response.write("Not found page");
        }
        //console.log(urlInfo);
    }
    response.end();
});
server.listen(9090, ()=>console.log("server is running on port number 9090"));

//favicon.ico is an issue with the browser

