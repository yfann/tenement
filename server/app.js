
var express=require('express');
var app=express();

var path= require('path');
var routes=require('./routes/mongo');

var mongoose=require('mongoose');
var conn=mongoose.createConnection('localhost','mytestapp');

var ToDoModel=require('./models/ToDoModel.js');
var TodoSchema=ToDoModel.ToDoSchema;
var todo=conn.model('todos',TodoSchema);

app.set('port', process.env.PORT || 3000);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/todos.json', routes.getAll(todo));

app.get('/todos/:id.json', routes.get(todo));

app.put('/todo/:id.json', routes.update(todo));

app.post('/todo.json', routes.addTodo(todo));

app.delete('/todo/:id.json', routes.remove(todo));

app.listen(3000,function(){
	console.log('Yggdrasil listening on 3000...');
});