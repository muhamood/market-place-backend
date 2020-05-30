const User = require("../db/user");	

const signUp = async(req, res, next) => {
	const user = new User({
		...req.body
	});

	try{
		await user.save();

	return res.send({
		success: true,
		message: "SignUp Succesful",
		user

	})

	}catch(e) {
		console.log(e)
		return res.send({
		success: false,
		message: e.message || "SignUp UnSuccesful"

	})
	}}

	

module.exports = {
		signUp
}