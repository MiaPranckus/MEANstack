//load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017"; //default port number where mongodb will run

//connect the database
mongoClient.connect(url, (err,client)=>{
    if(!err){
        console.log("Database connected");
        let db = client.db("tcsmean"); //connect to the tcsmean database
        
        //delete using _id
        db.collection("Employees").deleteOne({_id:18},(err,result)=>{
            if(!err){
                if(result.deletedCount > 0){
                    console.log("Record deleted successfully");
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