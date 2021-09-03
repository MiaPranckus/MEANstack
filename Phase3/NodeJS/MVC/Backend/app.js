//load all modules
let express = require("express");
let bodypaser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let routerProduct = require("./router/product.router");

//create the reference of express
let app = express();

//add the middleware
app.use(cors());
app.use(bodypaser.json()); //deprecated

//url database
let url = "mongodb://localhost:27017/tcsmean";

// connect the database 
mongoose.connect(url).
then(res=>console.log("connected")).
catch(error=>console.log(error));

//use middleware to help match the main path and pass the request to router file
//http://localhost:9090/api/product/getAllProductDetails
//http://localhost:9090/api/product/storeProductInfo
//http://localhost:9090/api/product/deleteProductInfo/:pid
//http://localhost:9090/api/product/updateProductInfo 
app.use("/api/product",routerProduct);

app.listen(9090,()=>console.log("Server running on port number 9090"));

