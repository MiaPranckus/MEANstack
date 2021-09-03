//load the module
let mongoose = require("mongoose");

let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null); //mongoose internally creates collection name in lowercase with post fix s
//this helps to avoid that ^

//connect the database - return promise object
mongoose.connect(url).then(res=>console.log("connected")).catch(err=>console.log(err));

//to use this connection, we have to call function
let db = mongoose.connection;
db.once("open", ()=>{
    //define schema
    let productSchema = mongoose.Schema({
        _id:Number,
        pname:String,
        price:Number
    });

    //using schema we have to create the module
    //1st param is collection name 2nd param is schema reference
    let productModel = mongoose.model("Product", productSchema);

    //using model, we have to create the reference
    let p1 = new productModel({_id:1, pname:"TV", price:3000});
    let p2 = new productModel({_id:2, pname:"Desktop", price:2500});
    let p3 = new productModel({_id:3, pname:"Car", price:40000});
    let p4 = new productModel({_id:4, pname:"Fancy Meal", price:6000});

    productModel.insertMany([p1,p2,p3,p4],(err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
        mongoose.disconnect();
    })
})
