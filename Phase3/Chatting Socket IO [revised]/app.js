//Mia Pranckus
//9-1-21
//Section End Project Chatting with Socket.io

let express = require("express"); //load the express module
const { ServerResponse } = require("http");
let app = express(); //create express reference
let http = require("http").Server(app); //load the http module and connect to the express module with Server property

let io = require("socket.io")(http); //load the socket.io module and connect to the http module with IIFE features

//create server responses
let serverResponses = ["Hello There", "Only a Sith deals in absolutes", "I will do what I must", "You were my brother Anakin, I loved you!",
"Anakin my Allegiance is to the Republic! To Democracy!", "Don't try it!", "Negotiations were short", "So uncivilized", "I hate flying",
"It's over Anakin, I have the high ground!", "These are not the droids you're looking for"];


//connect to the html file
app.get("/",(request,response)=>{
    response.sendFile(__dirname + "\\index.html");
})

//once the inital connection is made, report to the console that the client is connected
io.on("connection",(socket)=>{
    console.log("Client is connected");

    //recieve client's inital connection message
    socket.on("client_inital",(msg)=>{
        console.log(msg); //log the client's inital connection message
        //send server data to the client
        socket.emit("server_inital", "Hello Client, this is Server");
    })

    //recieve the client chat
    socket.on("client_chat",(msg,name)=>{
        console.log(name +" says: " +msg); //log the client chat
        
        //create random index
        let index = Math.floor(Math.random()*serverResponses.length);
        console.log("Server says: " +serverResponses[index].toString());
        socket.emit("server_chat", serverResponses[index].toString() + "<br/>"); //send the server response to the client
        //serverResponses.splice(index, 1); //remove that answer so we don't get repeats for the example
    })
    
}) //end of the "connection"

//run the server using http module not express module 
http.listen(9090,()=>console.log("Server running on port number 9090"));