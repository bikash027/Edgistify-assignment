var session=require('express-session');

var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
    uri: 'mongodb://localhost/bikash',
    collection: 'mySessions'
});

// Catch errors
store.on('error', function(error) {
console.log(error);
});

module.exports=session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'shhhh, very secret',
    store: store,
    cookie:{
        // secure: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
    }
})
  