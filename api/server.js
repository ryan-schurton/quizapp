var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var mongoconnect = "mongodb://localhost/justlearnt";
mongoose.connect(mongoconnect);

// Log to console any errors or a successful connection.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to db at /data/db/")
});

var Quiz = require('./models/Quiz.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


require('./models/quiz.mold.js');
var quiz = require('./controllers/quiz.ctrl.js');

require('./models/users.model.js');
var usermodelctrl = require('./controllers/users.ctrl.js');

app.use('/', express.static('./app'));

app.get('/home', quiz.findAll);
app.post('/submit', quiz.add);
app.get('/quiz/:id', quiz.findById);
app.post('/register', usermodelctrl.createUser);
app.post('/login', usermodelctrl.loginUser);

var port = Number(process.env.PORT || 8000);

app.listen(port,function(){
	console.log('Server Started on http://localhost:8000');
	console.log('Press CTRL + C to stop server');
});