let express = require("express"); //load the express module
const { ServerResponse } = require("http");
const {response, request} = require("express");
let app = express(); //create express reference
let mongoose = require("mongoose"); //load the mongoose module
mongoose.pluralize(null);
let http = require("http").Server(app); //load the http module and connect to the express module with Server property
let io = require('socket.io')(http); //load the socket.io module and connect to the http module with IIFE features

//create database connection
//database connection
let url = "mongodb://localhost:27017/Chatlog";
mongoose.connect(url).then(res=>console.log("Connected")).catch(err=>console.log(err));

//connect to the html file
app.get("/",(request,response)=>{
    response.sendFile(__dirname + "\\index.html");
})

//create the schema 
let chatSchema = mongoose.Schema({
    _id:Number, //unique per name
    name:String,
    message:String
});
// using schema we have to create the model 
//1st param collection name | 2nd param schema reference
let chatModel = mongoose.model("Chat",chatSchema);
//once the inital connection is made, report to the console that the client is connected
io.on("connection",(socket) =>{
    console.log("Client is connected");

    //recieve client's inital connection message
    socket.on("client_inital",(msg)=>{
        console.log(msg); //log the client's inital connection message
        //send server data to the client
        socket.emit("server_inital", "Hello Client, this is Server");
    })

    //recieve the client chat
    socket.on("client_chat", (name,chat,count)=> {
        //console.log(name + " says: " + chat + " | ID = " + count);
        //create object reference with chatModel
        let chatMessage = new chatModel({_id:count, name:name, message:chat});
        console.log(chatMessage);

        //send to database
        chatModel.insertMany(chatMessage, (err,res)=> {
            if(!err){
                console.log("Message sent successfully");
            }else{
                console.log("ERROR - Message could not send");
            }
        })
    })
})

//run the server using http module not express module 
http.listen(9090,()=>console.log("Server running on port 9090"));