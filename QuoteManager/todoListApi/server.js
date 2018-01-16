var express = require('express'),
  app = express(),
  //port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


//app.listen(port);


// console.log('todo list RESTful API server started on: ' + port);

// // app.use(function(req, res) {
// //   res.status(404).send({url: req.originalUrl + ' not found'})
// // });

// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }  
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

var http= require('http');
var fs = require('fs');

function onRequest(request, response)
{
	response.writeHead(200,{'Content-Type':'text/html'});
	fs.readFile('./index.html', null, function(error, data){
		if(error){
			response.writeHead(404);
			response.write('File not found.');
		}
		else{
			response.write(data);
		}
		response.end();
	});
}
http.createServer(onRequest).listen(8080);

var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));