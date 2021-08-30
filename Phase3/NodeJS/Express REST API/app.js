//load the module
const { request, response } = require("express");
let express = require("express");
let bodyParser = require("body-parser");

//create reference
let app = express();

//app.use(bodyParser.urlencoded({extended:true})); //passing value through form post method
app.use(bodyParser.json); //enable json data from request body part

let emp = {id:1, name:"Mia", age:22}; //literal javascript object creation
//only understandable in javascript
let employees = [
    {id: 1, name: "Mia", age: 22},
    {id: 2, name: "Cassey", age:25},
    {id: 3, name: "Haley", age:21}
] //literal javascript array of objects

// http://localhost:9090/sayPlainText
app.get("/sayPlainText", (request,response)=>{
    response.send("Welcome to REST API in plain text format");
});

// http://localhost:9090/sayJSON
app.get("/sayJSON", (request,response)=>{
    response.json({msg: "Welcome to REST API in JSON format"}); //json works in "key":"value" pairs
})

// http://localhost/empInfo
app.get("/empInfo", (request,repsonse)=>{
    response.json(emp); //automatically converts javascript object to JSON format
    //you can also pull specific values
    //response.send({"msg": emp.name});
}) //displays as plain text in JSON "key":"value" pair

// http://localhost/employeeInfo
app.get("/employeeInfo", (request,response)=>{
    response.json(employees); //automatically converts javascript object to JSON format
})

//PASSING DATA WITH STATIC VALUES (in the url path)
//query param with single value
// http://localhost/singleQueryParam?name=Mia
app.get("/singleQueryParam", (request,response)=>{
    let name = request.query.name;
    response.send("Welcome to query param, " +name);
})

//query param with multiple values
// http://localhost/multipleQueryParam?name=Mia&age=22
app.get("/multipleQueryParam", (request,response)=>{
    let name = request.query.name;
    let age = request.query.age;
    response.send("Welcome to query param, " +name +". Your age is " + age);
})

//path param with single value
// http://localhost/singlePathParam/Mia
app.get("/singlePathParam/:name", (request,response)=>{ //the : represent recieving value
    let user = request.params.name;
    response.send("Welcome to path param, " +user);
})

//path param with multiple value
// http://localhost/multiplePathParam/1/Mia/22
app.get("/multiplePathParam/:id/:name/:age", (request,response)=>{ //the : represent recieving value
    let id = request.params.id;
    let name = request.params.name;
    let age = request.params.age;
    response.send("Welcome to multiple path param, " +name +" (" +id +", " +age +")");
})

//STORE EMPLOYEE DETAILS WITH POST
//passing the data in a json format
//{"id": 1, "name":"Mia", "age":22};
// http://localhost:9090/storeEmployee
app.post("/storeEmployee", (request, response)=>{
    let employee = request.body;
    console.log(employee);
    response.send("Employee data sent");
})

//update employee details
// http://localhost:9090/updateEmployee
//{"id": 1, "age": 21}  we can pass partial objects
app.put("/updateEmployee", (request, response)=>{
    let employee = request.body;
    console.log(employee);
    response.send("Employee data updated");
})

//delete employee details
// http://localhost:9090/deleteEmployeeInfo/1
app.delete("/deleteEmployee/:id", (request, response)=>{
    let id = request.params.id
    response.send("Employee data deleted uding Id as " +id);
})

app.listen(9090, ()=>console.log("Server running on port 9090"));