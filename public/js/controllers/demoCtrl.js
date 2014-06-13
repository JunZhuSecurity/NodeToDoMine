
  angular.module('todoController')
    .controller('DemoCtrl', ['$scope', function($scope){
    	$scope.greeting = "Resize the page to see the re-rendering";
      $scope.title = "DemoCtrl";
      
    
      
      $scope.d3Data = [
        {name: "Greg", score:98},
        {name: "Ari", score:96},
        {name: "Loser", score: 48}
      ];
      $scope.d3OnClick = function(item){
        alert(item.name);
      };
    }]);

