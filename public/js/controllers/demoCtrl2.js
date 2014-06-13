//var Movie = require('../../../app/models/mydata');

  angular.module('todoController')
    .controller('DemoCtrl2', ['$scope', function($scope, $http, Todos) {
  		$scope.formData = {};
  		$scope.loading = true;

  		// GET =====================================================================
  		// when landing on the page, get all todos and show them
  		// use the service to get all the todos
  		Todos.get()
  			.success(function(data) {
  				$scope.d3Data = data; 
  				$scope.loading = false;
  			});
  		
  		
//      Movie.find(function(err, movies) {
//    	  if (err) return console.error(err);
//    	  console.dir(movies);
//    	  $scope.d3Data = movies;
//    	});
      
//      $scope.d3Data = [
//        {title: "Greg", score:12},
//        {title: "Ari", score:43},
//        {title: "Loser", score: 87}
//      ];
    }]);

