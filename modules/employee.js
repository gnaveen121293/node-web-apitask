var mongoose=require("mongoose");
var employeeSchema=mongoose.Schema({
	name : {
		type : String,
		required:true
	},
	age : {
		type : String,
		required:true
	},
	email : {
		type :  String,
		required :true
	},
	mobile : {
		type :String,
		required : true
	}

});
var Employee = module.exports=mongoose.model("emp",employeeSchema,"employee");
module.exports.getEmployees= function(callback){
	 return Employee.find(callback)
}

module.exports.createEmployee = function(employeeObj,callback){
	return Employee.create(employeeObj,callback)
}