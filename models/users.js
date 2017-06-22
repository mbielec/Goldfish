//the schema, model and methods for a user document (object) will be created here
//requires mongoose, bcrypt, and a link to ../config/database
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/database')

//User Schea
const UserSchema = mongoose.Schema({
	username:{
		type:String
	},
	email:{
		type:String
	},
	password:{
		type:String
	}
	// friends:[{
	// 	type: Schema.ObjectId,
	// 	ref:'User'
	// }],
	// courses:[{
	// 	type: Schema.ObjectId,
	// 	ref:'Course'
	// }]
});
//hash the password
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
//check if the password is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User',UserSchema);