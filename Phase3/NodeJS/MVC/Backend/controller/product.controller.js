const { response } = require("express");
let productModel = require("../model/product.model"); //load the product model (similar to 'import' in a ts file)
//this was exported in the product.model.js file, so it could be 'imported' here for access

let getAllProductDetails = (request,response)=> {
    productModel.find({},(err,data)=>{
        if(!err){
            response.json(data);
        }else{
            response.json(err);
        }
    })
}

let storeProductInfo = (request,response)=>{
    let product = request.body;

    productModel.insertMany(product, (err,res)=>{
        if(!err){
            response.send("Record Stored Successfully");
        }else{
            response.send(err);
        }
    })
}
let deleteProductInfo = (request,repsonse)=>{
    let pid = request.params.pid;
    productModel.deleteOne({_id:pid},(err,result)=>{
        if(!err){
            response.send("value deleted successfully");
        }else{
            response.send("err");
        }
    })
}

let updateProductInfo = (request,response)=> {
    let product = request.body;
    productModel.updateOne({_id:product._id},{$set:{price:product.price}},(err,result)=> {
        if(!err){
            response.send(result);
        }else {
            response.send(err);
        }
    })
}

module.exports = {getAllProductDetails, storeProductInfo, deleteProductInfo, updateProductInfo}; //export the function to be used in another file with "require"
