
exports.addTodo = function(Todo) {
  return function(req, res) {
    var todo = new Todo(req.body);
    todo.save(function(error, todo) {
      if (error || !todo) {
        res.json({ error : error });
      } else {
        res.json({ todo : todo });
      }
    });
  };
};

exports.get = function(Todo) {
  return function(req, res) {
    Todo.find({ id : req.params.id }, function(error, todos) {
      res.json({ todos : todos });
    });
  }
};

exports.getAll = function(Todo) {
  return function(req, res) {
    Todo.find({}, function(error, todos) {
      res.json({ todos : todos });
    });
  }
};

exports.remove=function(Todo){
  return function(req,res){
    Todo.findOne({ id : req.params.id },function(error,todos){
      Todo.remove({ id : todos.id }, function(error, result) {
         res.json({ todos : todos });
      });
    });
    

  };
}


exports.update = function(Todo) {
  return function(req, res) {
    Todo.findOne({ id : req.params.id }, function(error, todo) {
      if (error || !todo) {
        res.json({ error : error });
      } else {
        todo.done = req.body.done;
        todo.text=req.body.text;
        todo.save(function(error, todo) {
          if (error || !todo) {
            res.json({ error : error });
          } else {
            res.json({ todo : todo });
          }
        });
      }
    });
  }
};