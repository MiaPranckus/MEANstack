//load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017"; //default port number where mongodb will run

//connect the database
mongoClient.connect(url, (err,client)=>{
    if(!err){
        console.log("Database connected");
        let db = client.db("tcsmean"); //connect to the tcsmean database
        //let cursor = db.collection("Employees").find(); //find all records
        let cursor = db.collection("Employees").find({salary:{$gt:30000}}); //find with condition
        cursor.forEach(doc=>{
            console.log("Name: "+doc.name +" | Salary: "+doc.salary); //retrieve specific records
            //console.lgo(doc); //retrieve all records
            client.close();
        })
    } else{
        console.log(err);
    }
});