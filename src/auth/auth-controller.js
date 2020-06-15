const jwt = require('jsonwebtoken');

const {
    SECRET_KEY
} = require('../config')
const User = require("../db/user");


const signUp = async(req, res, next) => {
    const user = new User({
        ...req.body
    });

    try {
        await user.save();

        return res.send({
            success: true,
            message: "SignUp Succesful",
            user

        })

    } catch (e) {

        return res.send({
            success: false,
            message: e.message || "SignUp UnSuccesful"

        })
    }
}


const userLogin = async(req, res, next) => {


        try {

            const user = await User.findOne({
                email: req.body.email
            });

            // check if user then check password
            if (user && user.password == req.body.password) {
                const token = await jwt.sign({
                    id: user._id,
                    email: user.email
                }, SECRET_KEY);
                return res.send({
                    success: true,
                    message: "Login Succesful",
                    user,
                    token

                });
            }

            return res.status(!user ? 404 : 403).send({
                success: false,
                message: "Login unSuccesful"
            });


        } catch (e) {

            return res.send({
                success: false,
                message: e.message || "Login UnSuccesful"
            })

        }
    }
    // const token = jwt.sign(payload, private, [options, call back]);



module.exports = {
    signUp,
    userLogin
}