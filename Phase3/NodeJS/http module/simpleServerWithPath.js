let http = require("http");
let url = require("url");
let loginDetail = [{"user":"Mia", "pass":"123"},{"user":"John", "pass":"456"},
{"user":"Jill", "pass":"789"}]
let indexPage = `<html>
    <head></head>
    <body>
        <h2>Welcome to http module</h2>
        <a href="aboutUs">About Us page</a>
        <a href="contactUs">Contact Us page</a>
        <a href="login">Login page</a>
    </body>
</html>`
let loginPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Login Page</h2>
    <form action="checkLogin">
        <label>Username</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/><br/>
        <input type="reset" value="reset"/><br/>
        <a href="signup">Sign Up</a>
    </form>
</body>
</html>`

let registerLoginPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Register Account Page</h2>
    <form action="register">
        <label>Username</label>
        <input type="text" name="user"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
        <input type="submit" value="submit"/><br/>
        <input type="reset" value="reset"/><br/>
    </form>
</body>
</html>`
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
            response.write(loginPage);
        }else if(urlInfo.pathname == "/checkLogin"){ //pathname is for a branch of path. path->url pathname->form
            let login = urlInfo.query;
            //multi user
            let result = loginDetail.find(l=>l.user == login.user && l.pass == login.pass)
            if(result != undefined){
                response.write("Successful login");
            }else{
                response.write("Try again");
            }
        }else if(urlInfo.path == "/signup"){
            response.write(registerLoginPage);
        }else if(urlInfo.pathname == "/register"){
            let login = urlInfo.query;
            let result = loginDetail.find(l=>l.user == login.user);
            response.writeHead("200", {"content-type": "text/html"}); //200 means success; content type in header is text/html
            if(result != undefined){
                loginDetail.push(login);
                response.write("Account created successfully");
                response.write(loginPage);
            }else{
                response.write("Username must be unique");
                response.write(loginPage);
            }
        }
        else{
            response.write(indexPage);
        }
    }
    response.end();
});
server.listen(9090, ()=>console.log("server is running on port number 9090"));

//favicon.ico is an issue with the browser

