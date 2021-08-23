let url = require("url");
let urlDetails = "http://localhost:9090/simpleWebApp?name=Mia&age=22";
//dummy url ^ 
console.log("the value of 'urlDeatils is: " + urlDetails);
//let urlRef = url.parse(urlDetails); //considered as string
let urlRef = url.parse(urlDetails,true); //considered as reference
console.log("the value of 'urlRef is: ");
console.log(urlRef);
console.log("port number is: " +urlRef.port);
console.log("protocol being run is- " +urlRef.protocol);
console.log("host name is: " +urlRef.hostname);
console.log("the path is: " +urlRef.pathname);
//query param, how to extract details from url
let queryInfo = urlRef.query;
console.log(queryInfo); 
//name and age are two separate values. when url ref was a "string"
//queryInfo.name and queryInfo.age will not work
//but when urlRef is a reference, it will work
console.log(queryInfo.name);
console.log(queryInfo.age);


