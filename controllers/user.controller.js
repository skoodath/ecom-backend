const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const config = require('../config/app.config');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.register = (request, response)=>{

    const hash = bcrypt.hashSync(request.body.password, saltRounds)
    
    const registerUser = {
        username: request.body.username,
        password: hash,
        emailid: request.body.emailid

    }
    const userCollection = new userModel(registerUser);
    userCollection.save((err, doc)=>{
        try{
            if(doc._id){
            const payload = {id: doc._id};
            const token = jwt.sign(payload, config.JWT_KEY);
            response.send({result: "success", token: token});
            }
        } catch {
            response.send({result: err.message});
        }
    });
    
}

exports.signin = (request, response) => {

    const userLogin = {
        username: request.body.username,
        password: request.body.password
    };
    
    userModel.findOne({username: userLogin.username}, (error, doc) => {
        if(error){
            console.log(error);
            response.send({status: false, error: error.message});
        }
        if(doc){
            console.log(doc);
            if(bcrypt.compareSync(userLogin.password, doc.password)){
                const payload = {id: doc._id};
                const token = jwt.sign(payload, config.JWT_KEY);
                response.send({result: "success",token: token });
            }
        }
    });
}

exports.changepassword = (request, response) => {
    const userChange = request.body;

    userModel.findOne({emailid: userChange.emailid},(error, doc) => {
        if(error){
            console.log(error);
            response.send({status: false, error: error.message});
        }
        if(doc){
            if(doc.password === userChange.currentPassword){
                userModel.updateOne({emailid: doc.emailid}, {password: userChange.newPassword}, (err, res) => {
                    if(err){
                        console.log(err);
                        res.send({status: false, err: err.message});
                    }
                    if(res){
                        res.send({status: true, message: "Password updated"});
                    }
                });
            } else {
                response.send({status: false, err: "current password is incorrect"});
            }
        }
    });
}