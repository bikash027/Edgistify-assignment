var mongoose=require("mongoose");
var userSchema=new mongoose.Schema({
	fullName: String,
    userName: String,
    email: {type: String,unique: true},
    verified: Boolean,
    random: String,
    image:String,
    salt: String,
    hash: String
});
module.exports=mongoose.model("User",userSchema);