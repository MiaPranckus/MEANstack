//load the modules
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
const { response, request } = require("express");
mongoose.pluralize(null);

//create the express reference
let app = express();
app.use(bodyParser.urlencoded({extended:true}));

//add middleware
app.use(cors());
app.use(bodyParser.json());

let courses = [];

//database connection
let url = "mongodb://localhost:27017/mongoWebsiteProject";
mongoose.connect(url).then(res=>console.log("Connected")).catch(err=>console.log(err));

//path directory for html pages
app.get("/", (request,response)=> {
    response.sendFile('index.html', {root:__dirname});
})
app.get("/index",(request,response)=>{
    response.sendFile('index.html', {root:__dirname});
})
app.get("/addCourse",(request,response)=> {
    response.sendFile('addCourse.html', {root:__dirname});
})
app.get("/updateCourse",(request,response)=> {
    response.sendFile('updateCourse.html', {root:__dirname});
})
app.get("/deleteCourse",(request,response)=> {
    response.sendFile('deleteCourse.html', {root:__dirname});
})


let db = mongoose.connection;
db.once("open",()=> {
    // We have to defined schema which provide the structure for collection 
    let courseSchema = mongoose.Schema({
        _id:String,
        cname:String,
        description:String,
        amount:Number
    });

    // using schema we have to create the model 
    //1st param collection name | 2nd param schema reference
    let courseModel = mongoose.model("Course",courseSchema);
    
    //path directory for functions
    app.post("/add", (request,response)=> {
        let courseInfo = request.body;
        courses.push(courseInfo);

        //add to database
        //using model we have to crete the reference 
        let course = new courseModel({_id:courseInfo.cID, cname:courseInfo.cName, 
            description:courseInfo.description, amount:courseInfo.amount});
        
        courseModel.insertMany(course, (err,res)=> {
            if(!err){
                response.send("Course added successfully! Click back arrow to go back to home page");
            }else{
                response.send("Course ID must be unique");
            }
        })
    })

    app.get("/delete", (request,response)=> {
        let cID = request.query.cID;
        
        courseModel.deleteOne({_id:cID},(err,res)=> {
            if(!err){
                response.send("Course Deleted Successfully! Click back arrow to go back to home page");
            }else{
                if(res.deletedCount == 0){
                    response.send("Couldn't find a course with ID " +cID);
                }
            }
            response.end();
        })
    })

    app.get("/update", (request,response)=> {
        let newAmount = request.query.amount;
        let cID = request.query.cID;

        courseModel.updateOne({_id:cID},{$set:{amount:newAmount}}, (err,res)=> {
            if(!err){
                response.send("Course update successfully! Click back arrow to go back to home page");
            }else{
                if(res.modifiedCount == 0){
                    response.send("Could not find a course with ID " +cID);
                }
            }
        })

    })

    app.get("/viewCourses", (request,response)=> {
        var tableContent = '';
        var startTable = "<table border = 1><tr><th>Course ID</th><th>Course Name</th><th>Description</th><th>Amount</th></tr>";
        var endTable = "</table>"
        courseModel.find({}, (err,data)=> {
            if(!err){
                data.forEach(c=> {
                    tableContent += "<tr><td>" + c._id + "</td><td>" + c.cname + "</td><td>" + c.description + "</td><td>" + c.amount + "</td></tr>";
                })
                response.write(startTable + tableContent + endTable);
            }
        })
    })

})

app.listen(9090,()=>console.log("Server running on port 9090"));