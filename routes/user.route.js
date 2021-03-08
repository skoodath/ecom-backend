const express = require('express');
const userRouter = express.Router();
const auth = require('../auth/auth');

const userController = require('../controllers/user.controller');

userRouter.post('/register', userController.register);

userRouter.post('/signin', auth.authMiddleware,userController.signin);

userRouter.post('/changepassword', auth.authMiddleware, userController.changepassword);

module.exports = userRouter;