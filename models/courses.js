//the schema, model and methods for a user document (object) will be created here
//requires mongoose, bcrypt, and a link to ../config/database
const mongoose = require('mongoose');
const config = require('../config/database')

//Course Schema
const CourseSchema = mongoose.Schema({
	courseComponentId:{
		type:String
	},
	courseId:{
		type:String
	},
	type:{
		type:String
	},
	sectionCode:{
		type:String
	},
	students:[{
		type: Schema.ObjectId,
		ref:'User'
	}],
});

const Course = module.exports = mongoose.model('Course',CourseSchema);