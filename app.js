


var express = require('express');
global.mongoose = require('mongoose');
global.path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var monkey = require('Monkey');
global.db = mongoose.connect('mongodb://localhost/bananas');


var app = express();


app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));


console.log('app:', app);

var monkeysController = require(path.join(__dirname, 'monkeysController'));

app.get('/api/monkeys', monkeysController.index);

app.post('/api/monkeys', monkeysController.create);

app.put('/api/monkeys/:id', monkeysController.update);


app.delete('/api/monkeys/:id', monkeysController.delete);


app.listen(8000, function() {

});




