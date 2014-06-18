
  angular.module('todoController')
    .controller('areaChartCtrl', ['$scope', function($scope){
    	$scope.greeting = "Resize the page to see the re-rendering";
      $scope.title = "DemoCtrl";
      
    
      $scope.data = [
                       {name: "Greg", score:98},
                       {name: "Ari", score:96},
                       {name: "Loser", score: 48}
                     ];
//      d3.tsv("data/dataArea.tsv", function(error, data){
//    	   $scope.data = data;
//      });
      
//    	  [{name: "Greg", score:98},
//        {name: "Ari", score:96},
//        {name: "Loser", score: 48}
//      ];
      
    
      
//      $scope.d3OnClick = function(item){
//        alert(item.name);
//      };
    }]);
