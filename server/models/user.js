const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	phoneNo: { type: String, required: true },
	companyName: { type: String, required: true },
	email: { type: String, required: true },
	employeeSize: { type: String, required: true },
	password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Name"),
		phoneNo: Joi.string().required().label("Phone no."),
		companyName: Joi.string().required().label("Company Name"),
		email: Joi.string().email().required().label("Company Email"),
		employeeSize: Joi.string().required().label("Employee Size"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };