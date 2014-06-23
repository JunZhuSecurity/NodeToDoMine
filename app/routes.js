var Todo = require('./models/todo');
//newly added
var Mydata = require('./models/mydata');

var newchartdata = require('./models/testdata');

module.exports = function(app) {

	//newly added
	app.get('/lineChartTickValue', function(req, res) {

		// use mongoose to get all todos in the database
		newchartdata.find(function(err, rawdata) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err){
				res.send(err); console.log("error");}
			else {console.log(rawdata);
			res.json(rawdata);
			res.render('./public/lineChartTickValue.html');
			//res,sendfile('./public/lineChartTickValue.html');
			} // return all todos in JSON format
		});	
		
	});
	
	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json({todos:todos, username: "stsrtaratr"}); // return all todos in JSON format
		});
		//newly added
//		Mydata.find(function(err, mydata) {
//
//			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
//			if (err)
//				res.send(err)
//
//			res.json(mydata); // return all todos in JSON format
//		});
		
		
		
		//above are newly added
		
		
	});

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});

	// application -------------------------------------------------------------
	
	app.get('*', function(req, res) {
		res.render('lineChartTickValue.html'); //res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
	
};