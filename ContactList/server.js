var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'))

app.get('/',function (req,res){
	res.send('hello world from server.js');
});

app.get('/contactlist',function (req,res) {
	console.log("I recieved a get request from contactlist");
	person1 = {
		name:'Tim',
		email:'tim@email.com',
		number:'1231231232'
	}
	person2 = {
		name:'Tim1',
		email:'tim1@email.com',
		number:'1231231231'
	}
	person3 = {
		name:'Tim2',
		email:'tim2@email.com',
		number:'1231231230'
	}

	var contactlist = [person1, person2, person3];
	res.json(contactlist);
})

app.listen(3000);
console.log('Server runnning on port 3000');