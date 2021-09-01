//Mia Pranckus
//8-31-21
//Chat Socket.io project

let express = require("express"); // load the express module 
let app = express(); // create the reference of express module 

// load the express-ws module and create the reference of express-ws with the help of express reference using IIFE
let ws = require("express-ws")(app);

//create server responses
let serverResponses = ["Hello There", "Only a Sith deals in absolutes", "I will do what I must", "You were my brother Anakin, I loved you!",
"Anakin my Allegiance is to the Republic! To Democracy!", "Don't try it!", "Negotiations were short", "So uncivilized", "I hate flying"];

//create variable for timestamp
let timeStamp = Date().toString();
// http://localhost:9090
// open the html static web page 
app.get("/",(request,response)=> {
    response.sendFile(__dirname+"\\index.html");
})

app.ws("/",(socket,request)=> {
    console.log("Client connected");

    // recieve message from client application 
    socket.on("message",(msg)=> {
        console.log("Client says: " +msg +"  (" +timeStamp + ")");
        
    });
    socket.onmessage = (msg)=>{
        console.log("Server says: " +msg.toString());
        let index = Math.floor(Math.random()*serverResponses.length);
        socket.send("Server says: " +serverResponses[index].toString() +  "<br/>" + "(" +timeStamp +")");
        serverResponses.splice(index, 1);
    }
    //send a message to the client application to initiate conversation.
    socket.send("Hello Client, You are connect the Socket Server App!");
})


app.listen(9090,()=>console.log("Server running on port number 9090"))