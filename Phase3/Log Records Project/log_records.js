//Mia Pranckus
//8-23-21
//Log Record and Debug Phase End Project

//Read values from user
function readVals(){
    let readline = require("readline-sync");
    let fname = readline.question("Enter your first name: ");
    let lname = readline.question("Enter your last name: ");
    let gender = readline.question("Enter your gender [Male or Female]: ");
    let email = readline.questionEMail("Enter your email address: ");

    console.log(fname);
        debugger;
    console.log(lname);
        debugger;
    console.log(gender);
        debugger;
    console.log(email);
        debugger;

    //create timestamp variable to log data and time of when the object is created
    let timestamp = Date().toString();
    console.log(timestamp);

    //store values in JSON array
    let fs = require("fs");
    //read file first
    let valuesFile = JSON.parse(fs.readFileSync("values.json").toString());
    valuesFile.push({"firstname":fname, "lastname":lname, "gender":gender, "email":email, "timestamp":timestamp}); //push new stuff
    fs.writeFileSync("values.json", JSON.stringify(valuesFile)); //write to values.json file
}

readVals();

