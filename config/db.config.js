const mongoose = require('mongoose');

const config = require('./app.config');

exports.connect = () => {
    mongoose.connect(config.MONGO_URI, { 
        useUnifiedTopology: true, 
        useNewUrlParser: true, 
        useCreateIndex: true 
        }, (error) => {
        if(error){console.log(error);}
        else {console.log("Database connection successful");}
    });
}
