const jwt = require('jsonwebtoken');
const config = require('../config/app.config');

exports.authMiddleware= (request,response,next) => {    
    console.log(request.headers);

    if(request.headers.authorization === null || request.headers.authorization === "" ){
        response.status(401).send("Unauthorized access!");
    }

    const token= request.headers.authorization.split(' ')[1];
        console.log(token);
     jwt.verify(token,config.JWT_KEY,(error, payload) => {
         if(error){
             response.send({error:error.message})
         }
         if(payload){
             console.log(payload);
             next();
         }
     });

    // send response or call next()
}