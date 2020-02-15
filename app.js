var express=require("express");
var app=express();
var bodyParser =require("body-parser");
var mongoose =require("mongoose");
var session=require('./config/session');
var userRoutes=require('./routes/user');
var posts=require('./routes/posts');
var seedData=require('./seedData');
var path=require('path');

app.use(session);
app.use(express.static('public'));
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
const connection=(process.env.NODE_ENV==="production")?"mongodb://localhost/bikash":"mongodb://localhost/bikashDev";
mongoose.connect(connection);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.use('/post',posts)
app.use('/user',userRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

seedData()
.then(errPost=>{
    console.log('database seeded with data');
})
.catch(err=>{
    console.log(err.message);
})

const port=5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));