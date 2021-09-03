//load mongoose module
let mongoose = require("mongoose");
mongoose.pluralize(null); //avoid lowercase with post fix s
//create schema
let productSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number
});

//using schema, creating the model
//1st param is collection name 2nd param is schema
let productModel = mongoose.model("Product", productSchema);

module.exports = productModel; //we can then import the prodcutModel using "require" in another file