
var express=require('express');
var app=express();

var path= require('path');
var routes=require('./routes/mongo');

var mongoose=require('mongoose');
var conn=mongoose.createConnection('localhost','tenement');

var TenementModel=require('./models/TenementModel.js');
var TenementItemsSchema=TenementModel.TenementItemsSchema;
var items=conn.model('tenement_items',TenementItemsSchema);

app.set('port', process.env.PORT || 2333);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/items.json', routes.getAll(items));

app.get('/items/:id.json', routes.get(items));

app.put('/item/:id.json', routes.update(items));

app.post('/item.json', routes.addItem(items));

app.delete('/item/:id.json', routes.remove(items));

app.listen(2333,function(){
	console.log('Tenement listening on 2333...');
});