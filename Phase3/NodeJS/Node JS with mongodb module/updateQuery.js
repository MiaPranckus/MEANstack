//load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017"; //default port number where mongodb will run

//connect the database
mongoClient.connect(url, (err,client)=>{
    if(!err){
        console.log("Database connected");
        let db = client.db("tcsmean"); //connect to the tcsmean database
        
        //update city by _id
        //if you're updating using an underscore property (PK) use 'updateOne'
        db.collection("Employees").updateOne({_id:4},{$set:{city:"Mumbai",name:"Ajay Adams"}},(err,result)=>{
            if(!err){
                if(result.modifiedCount > 0){
                    console.log("Updated successfully");
                }
            }else{
                console.log("Record not present");
            }
            client.close();
        })
    } else{
        console.log(err);
    }
});