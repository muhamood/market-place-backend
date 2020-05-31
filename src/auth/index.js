const express = require('express');
const {
    signUp,
    userLogin

} = require("./auth-controller");


const authRouter = express.Router();

authRouter.post('/signup', signUp);
authRouter.post('/login', userLogin);

module.exports = authRouter;