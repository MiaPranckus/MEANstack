/*Mia Pranckus
8-26-21
Task Planner with NodeJS */

//declare modules
let http = require("http");
let url = require("url");
let fs = require("fs");

//html page
let taskPlannerPage1 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Task Planner</h2>
    <h2>Add Task</h2>
    <form action="addTask">
        <label>Employee ID</label>
        <input type="text" name="empID"/><br/>
        <label>Task ID</label>
        <input type="text" name="taskID"/><br/>
        <label>Task</label>
        <input type="textarea" name="task"/><br/>
        <label>Deadline</label>
        <input type="Date" name="deadline"/><br/>

        <input type="submit" value="ADD TO TASK BOARD"/>
        <input type="reset" value="reset"/> <br/>
    </form>
</body>
</html> `

let taskPlannerPage2 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <hr/>
    <h2>Delete A Task</h2>
    <form action="deleteTask">
        <label>Task ID</label>
        <input type="text" name="taskID"/><br/>
        <input type="submit" value="DELETE TASK"/>
    </form>
</body>
</html>`

let taskPlannerPage3 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <hr/>
    <h2>All Tasks</h2>
    <form action="showAllTasks">
        <input type="submit" value="SHOW TASKS"/>
    </form>
</body>
</html>`

//create server
let server = http.createServer((request, response)=>{
    let urlInfo = url.parse(request.url,true);
    //create task json file reference
    let taskFile = JSON.parse(fs.readFileSync("taskFile.json").toString());
    if(urlInfo.path != "/favicon.ico"){
        if(urlInfo.path == "/"){
            response.write(taskPlannerPage1 + taskPlannerPage2 + taskPlannerPage3); //load the pages together on start up
        }
        if(urlInfo.pathname == "/addTask"){ //if they click the add task button
            let taskDetails = urlInfo.query;
            //console.log(taskDetails);
            let tID = taskDetails.taskID;
            let result = taskFile.find(t=>t.tID == taskDetails.taskID);
            if(result == undefined){ //if the taskID is unique
                taskFile.push({"empID":taskDetails.empID, "taskID": taskDetails.taskID,
            "task":taskDetails.task, "deadline":taskDetails.deadline}); //push the object
                fs.writeFileSync("taskFile.json", JSON.stringify(taskFile)); //write to taskFile.json file
                let msg = "Task " +tID + " added successfully";
                response.write(taskPlannerPage1 + msg + taskPlannerPage2 + taskPlannerPage3);
            } else {
                let msg = "Task ID must be unique!";
                response.write(taskPlannerPage1 + msg + taskPlannerPage2 + taskPlannerPage3);
            }
        }
        if(urlInfo.pathname == "/deleteTask"){ //if they click the delete task button
            let info = urlInfo.query;
            let tID = info.taskID;
            //read in the current taskFile
            let taskFile = JSON.parse(fs.readFileSync("taskFile.json").toString());
            let index = taskFile.findIndex(element=>element.taskID == tID);
            console.log(index);
            if(index == -1){ //if the task ID doesn't exist within the array
                let msg = "Task ID " +tID +" does not exist yet";
                response.write(taskPlannerPage1 + taskPlannerPage2 + msg + taskPlannerPage3);
            }else{
                taskFile.splice(index, 1); //remove 1 object starting at index
                fs.writeFileSync("taskFile.json", JSON.stringify(taskFile)); //rewrite the file
                let msg = "Task " +tID +" deleted successfully";
                response.write(taskPlannerPage1 + taskPlannerPage2 + msg + taskPlannerPage3);
            }
        }
        if(urlInfo.pathname == "/showAllTasks"){
            let taskFile = JSON.parse(fs.readFileSync("taskFile.json").toString());
            var tableContent="";
            var startTable = "<table border = 1><tr><th>Employee ID</th><th>Task ID</th><th>Task</th><th>Deadline</th></tr>";
            taskFile.forEach(e => {
                tableContent+= "<tr><td>" + e.empID + "</td><td>" + e.taskID + "</td><td>" + e.task + "</td><td>" + e.deadline + "</td></tr>";
            });
            var endTable = "</table";
            response.write(taskPlannerPage1 + taskPlannerPage2 + taskPlannerPage3 +startTable +tableContent +endTable);
        }
    }
    
    response.end();
})

server.listen(8080,()=>console.log("Server running on port 8080"));