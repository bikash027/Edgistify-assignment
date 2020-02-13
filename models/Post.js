var mongoose=require("mongoose");
var postSchema=new mongoose.Schema({
    image: String,
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    text: String,
    time_added: Date,
    contentType: String,
    Post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
});
module.exports=mongoose.model("Post",postSchema);