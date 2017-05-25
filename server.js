var express = require("express");
var app = express();
var router = express.Router();
var mongoose=require("mongoose");
var Employee= require("./modules/employee");
var bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb://localhost/office",function(){
	console.log("succcessfully connected to database!!")
})

router.get("/",function(request,response){

	response.send({name : "Goverthanan"})
}) 
router.get("/employee1" ,function(request,response){
	Employee.getEmployees(function(err,employeeData){
		if(err){
			throw err;
		}
		response.json(employeeData);
	})

})
router.post("/employee2" , function(request,response){
	var employeeObj = request.body;
	Employee.createEmployee(employeeObj,function(err,data)
	{
		if(err){
			throw err;
		}
    response.json(data)
	})
})
app.use("/api",router);
var PORT = process.env.PORT || 4004;
app.listen(PORT,function(){
	console.log("server listening to port" + PORT)
})