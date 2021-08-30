//load the module
let express = require("express");
let bodyParser = require("body-parser");

let userDetails = [];

//creating the reference of the express module
let app = express();
//which is used to enable "post" data recieving from normal HTML form
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (request,response)=>{
    response.send("Welcome to Express JS Simple Module");
})
app.get("/aboutUs", (request,response)=>{
    //response.send("Welcome to About Us page");
    response.sendFile(__dirname+"\\aboutUs.html");
})
app.get("/contactUs", (request,response)=>{
    //response.send("Welcome to Contact Us page");
    response.sendFile(__dirname+"\\contactUs.html");
})
app.get("/login", (request,response)=>{
    response.sendFile(__dirname+"\\login.html");
})

app.get("/checkUser", (request,response)=>{
    let user=request.query["user"]; //to recieve text field input value
    let pass=request.query["pass"];
    let found=userDetails.find(u=>u.uname==user && u.pass==pass);
    if(found != undefined){
        response.send("Successfully Login!");
    }else {
            response.send("Failure try once again!");
    }
})
app.get("/index", (request,response)=>{
    //response.send("Welcome to index page");
    //response.sendFile("index.html"); //not able to find the path, need complete path
    //response.sendFile("C:\\Users\\pranc\\Desktop\\MEANstack\\Phase3\\NodeJS\\express modules\\index.html");
    //the double \\ is for formating
    response.sendFile(__dirname+"\\index.html"); //__dirName is a predefined attribute (2 underscores)
})

app.get("/signup", (request, response)=>{
    response.sendFile(__dirname+"\\register.html");
})

// app.post("/register", (requesst,response)=>{
//     response.send("Post method...");
// })

app.post("/register",(request,response)=>{
    let userDetail = request.body;      // json data from body. 
    userDetails.push(userDetail);       // store in array. 
    response.sendFile(__dirname+"\\login.html");
});

app.listen(9090, ()=>console.log("Server running on port 9090"));