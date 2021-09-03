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

    productModel.find({},(err,doc)=>{
        if(!err){
            doc.forEach(rec=>{
                //console.log(rec);
                console.log("Name: " +rec.pname + " | Price: " +rec.price); //specific values
            })
        }else{
            console.log(err);
        }
        mongoose.disconnect();
    });
    
})
