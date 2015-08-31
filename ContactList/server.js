var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.get('/',function (req,res){
	res.send('hello world from server.js');
});

app.get('/contactlist',function (req,res) {
	console.log("I recieved a get request from contactlist");
	db.contactlist.find(function (err, docs) {
		res.json(docs);
	});
	
});

app.post('/contactlist', function (req, res) {
	db.contactlist.insert(req.body,function(err, docs){
		res.json(docs);
	});
});

app.listen(3000);
console.log('Server runnning on port 3000');