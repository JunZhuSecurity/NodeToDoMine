  angular.module('nvd3TestApp')
    .controller('discreteBarCtrl', ['$scope', function($scope){
    	$scope.exampleData = [
    	                      {
    	                          key: "Cumulative Return",
    	                          values: [
    	                              ["A", -29.765957771107 ],
    	                              ["B" , 0 ],
    	                              ["C" , 32.807804682612 ],
    	                              ["D" , 196.45946739256 ],
    	                              ["E" , 0.19434030906893 ],
    	                              ["F" , -98.079782601442 ],
    	                              ["G" , -13.925743130903 ],
    	                              ["H" , -5.1387322875705 ]
    	                          ]
    	                      }
    	                  ];

    	                  $scope.$on('tooltipShow.directive', function(event){
    	                      console.log('scope.tooltipShow', event);
    	                  });

    	                  $scope.$on('tooltipHide.directive', function(event){
    	                      console.log('scope.tooltipHide', event);
    	                  });
    }
    ]);


 