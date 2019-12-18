var express = require('express');
var app = express();
var bodyParser = require('body-parser')
// app.use(express.json());
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.json())
// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.post('*', (req,res) => {
     res.setHeader('Content-Type', 'text/json')
//      res.write('you posted:\n')
     res.end(JSON.stringify(req.body, null, 2))
	console.log(JSON.stringify(req.body, null, 2))
//     res.json({"requestBody": #(bo)});
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
