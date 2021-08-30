//load modules
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

//create the references
let app = express();

//middleware
app.use(bodyParser.json()); //enable json data from request body
app.use(cors()); //enable cors

let customers =[
    {"cid": 1, "name": "Mia", "age":22},
    {"cid": 2, "name": "Anna", "age":25},
    {"cid": 3, "name": "Casey", "age":12}
];

//search customer by ID
// localhost:8080/findCustomerById/1
app.get("/findCustomerById/:cid", (request, response)=>{
    let cid = request.params.cid;
    let customer = customers.find(c=>c.cid==cid);
    if (customer == undefined){
        response.write("Customer is not present with customer ID " +cid);
    }else{
        response.json(customer);
    }
});

//get all customer details
// localhost:8080/allCustomerDetails
app.get("/allCustomerDetails", (request,response)=>{
    response.json(customers);
});

// add new customer 
// http://localhost:8080/storeCustomerInfo
// {"cid":100,"cname":"Mimi","age":24}
app.post("/storeCustomerInfo",(request,response)=> {
    let cust = request.body;         // in json format. 
    let customer = customers.find(c=>c.cid==cust.cid);
    if(customer==undefined){
          customers.push(cust);
     response.json({"msg":"Customer Record added sucessfully"})
 }else {
     response.json({"msg":"Customer id must be unique "});
 }
})

//update customer details
// localhost:8080/updateCustomerAge
//{"id":3, "age":25}
app.put("/updateCustomerAge", (request,response)=>{
    //update age based on customer id
    let cust = request.body;
    let index = customers.findIndex(c=>c.cid == cust.cid);
    if(index == -1){ 
        response.json({"msg":"No customer found with ID " +cust.cid})
    }else{
        customers[index].age = cust.age;
        response.json({"msg": "Customer " +customer.name +"'s age has been updated successfully"});
    }
})

//delete customer details
// localhost:8080/deleteCustomerInfo/1
app.delete("/deleteCustomerInfo/:cid", (request,response)=>{
    //delete based upon customer id
    let cid = request.params.cid;
    let index = customers.findIndex(c=>c.cid == cid);
    if(index == -1){ 
        response.json({"msg":"No customer found with ID " +cid});
    }else{
        customers.splice(index,1);
        response.json({"msg": "Customer " +customer.name +"'s age has been updated successfully"});
    }
})

app.listen(8080,()=>console.log("server running on port 8080"));