var express=require("express");
var app=express();
var bodyParser =require("body-parser");
var mongoose =require("mongoose");
var session=require('./config/session');
var userRoutes=require('./routes/user');
var posts=require('./routes/posts');

app.use(session);
app.use(express.static('public'));
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/bikash");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/post',posts)
app.use('/user',userRoutes);



const port=5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));