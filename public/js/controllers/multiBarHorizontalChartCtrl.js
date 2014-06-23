 angular.module('nvd3TestApp')
  .controller('multiBarHorizontalChartCtrl', ['$scope', function($scope){
	  $scope.exampleData = [
	                        {
	                            "key": "Series1",
	                            "color": "#d62728",
	                            "values": [
	                                ["Group A" , -1.8746444827653 ],
	                                ["Group B" , -8.0961543492239 ],
	                                ["Group C" , -0.57072943117674],
	                                ["Group D" , -2.4174010336624 ],
	                                ["Group E" , -0.72009071426284],
	                                ["Group F" , -0.77154485523777],
	                                ["Group G" , -0.90152097798131],
	                                ["Group H" , -0.91445417330854],
	                                ["Group I" , -0.055746319141851]
	                            ]
	                        },
	                        {
	                            "key": "Series2",
	                            "color": "#1f77b4",
	                            "values": [
	                                ["Group A" , 25.307646510375],
	                                ["Group B" , 16.756779544553],
	                                ["Group C" , 18.451534877007],
	                                ["Group D" , 8.6142352811805],
	                                ["Group E" , 7.8082472075876],
	                                ["Group F" , 5.259101026956],
	                                ["Group G" , 0.30947953487127],
	                                ["Group H" , 0],
	                                ["Group I" , 0]
	                            ]
	                        }
	                    ];
  }
  ]);