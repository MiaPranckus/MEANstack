let mongoose = require("mongoose"); //load the module
mongoose.pluralize(null);

//create the schema
let userSchema = mongoose.Schema({
    email:{type:String, unique:true},
    password:{type:String}
});

//create the model
let userModel = mongoose.model("User", userSchema);

module.exports = userModel; //export the model to be used in another file
