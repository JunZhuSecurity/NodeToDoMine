 angular.module('nvd3TestApp')
  .controller('lineChartTickValueCtrl', ['$scope', function($scope, $http){
	  
	  $http.get('/lineChartTickValue').success(function(data) {
		  console.log(data);
			$scope.exampleData = data; 
			//$scope.loading = false;
		});
	  
	  
//	  $scope.exampleData = [
//	                        {
//	                            "key": "Github Api Mean Web Response Time",
//	                            "values": [[1378387200.0, 123.08370666666667], [1378387500.0, 119.64371999999999], [1378387800.0, 126.92131333333332], [1378388100.0, 122.06958666666667], [1378388400.0, 126.50453], [1378388700.0, 168.14301666666668], [1378389000.0, 132.83243], [1378389300.0, 137.11919333333336], [1378389600.0, 152.85155], [1378389900.0, 133.26816], [1378390200.0, 178.5094466666667], [1378390500.0, 156.0947666666667]]
//	                        }];

	                    $scope.xAxisTickValuesFunction = function(){
	                        return function(d){
	                            var tickVals = [];
	                            var values = d[0].values;
	                            var interestedTimeValuesArray = [0, 00, 15, 30, 45];
	                            for(var i in values){
	                                if(interestedTimeValuesArray.indexOf(moment.unix(values[i][0]).minute()) >= 0){
	                                    tickVals.push(values[i][0]);
	                                }
	                            }
	                            console.log('xAxisTickValuesFunction', d);
	                            return tickVals;
	                        };
	                    };

	                    $scope.xAxisTickFormatFunction = function(){
	                        return function(d){
	                            return d3.time.format('%H:%M')(moment.unix(d).toDate());
	                        }
	                    };
  }
  ]);