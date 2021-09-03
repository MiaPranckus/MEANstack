//load the module and create the reference of mongodb module
let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017"; //default port number where mongodb will run

//connect the database
mongoClient.connect(url, (err,client)=>{
    if(!err){
        console.log("Database connected");
        let db = client.db("tcsmean"); //connect to the tcsmean database
        //let emp = {_id:16,name:"Dipesh",salary:38000,deptID:100,city:"Delhi"} //create a static entry
        let emp2 = [
            {_id:17,name:"Rattan",salary:39000,deptID:200,city:"Mumbai"},
            {_id:18,name:"Donnie",salary:35000,deptID:300,city:"Delhi"},
            {_id:19,name:"Thappa",salary:30000,deptID:100,city:"Bangalore"}
        
        ];
        db.collection("Employees").insertMany(emp2,(err,result)=>{ //insert entry
            if(!err){
                console.log("Record(s) inserted successfully");
            }else{
                console.log(err);
            }
            client.close();
        });

    } else{
        console.log(err);
    }
});