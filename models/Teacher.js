const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teacherSchema = new Schema({
name: {
	type: String
},
email: {
	type: String
},
phone: {
	type:String
},

password: {
	type: String
},

aboutMe: {
	type: String
},
subjects: 
{
		
	type : Array , "default" : []
	
},

/*availbalLseeons:
{
	id:{type:Number},
	date: { type: Date, default: Date.now }
}*/
}, {
	collection: 'teachers'
})

module.exports = mongoose.model('Teacher', teacherSchema)
