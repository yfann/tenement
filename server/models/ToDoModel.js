var mongoose=require('mongoose');

exports.ToDoSchema=new mongoose.Schema({
	address:{type:String},
	id:{type:String,required:true},
	done:{type:Boolean,default:false},
	text:{type:String,required:true}
});