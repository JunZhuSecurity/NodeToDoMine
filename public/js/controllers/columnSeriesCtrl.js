//from http://n3-charts.github.io/line-chart/#/examples
angular.module('example', ['n3-line-chart'])
  .controller('columnSeriesCtrl', function($scope) {
	  $scope.example = [
	                    {x: 0, val_0: 0, val_1: 0, val_2: 0, val_3: 0},
	                    {x: 1, val_0: 0.993, val_1: 3.894, val_2: 8.47, val_3: 14.347},
	                    {x: 2, val_0: 1.947, val_1: 7.174, val_2: 13.981, val_3: 19.991},
	                    {x: 3, val_0: 2.823, val_1: 9.32, val_2: 14.608, val_3: 13.509},
	                    {x: 4, val_0: 3.587, val_1: 9.996, val_2: 10.132, val_3: -1.167},
	                    {x: 5, val_0: 4.207, val_1: 9.093, val_2: 2.117, val_3: -15.136},
	                    {x: 6, val_0: 4.66, val_1: 6.755, val_2: -6.638, val_3: -19.923},
	                    {x: 7, val_0: 4.927, val_1: 3.35, val_2: -13.074, val_3: -12.625},
	                    {x: 8, val_0: 4.998, val_1: -0.584, val_2: -14.942, val_3: 2.331},
	                    {x: 9, val_0: 4.869, val_1: -4.425, val_2: -11.591, val_3: 15.873},
	                    {x: 10, val_0: 4.546, val_1: -7.568, val_2: -4.191, val_3: 19.787},
	                    {x: 11, val_0: 4.042, val_1: -9.516, val_2: 4.673, val_3: 11.698},
	                    {x: 12, val_0: 3.377, val_1: -9.962, val_2: 11.905, val_3: -3.487},
	                    {x: 13, val_0: 2.578, val_1: -8.835, val_2: 14.978, val_3: -16.557},
	                    {x: 14, val_0: 1.675, val_1: -6.313, val_2: 12.819, val_3: -19.584},
	                    {x: 15, val_0: 0.706, val_1: -2.794, val_2: 6.182, val_3: -10.731},
	                    {x: 16, val_0: -0.292, val_1: 1.165, val_2: -2.615, val_3: 4.63},
	                    {x: 17, val_0: -1.278, val_1: 4.941, val_2: -10.498, val_3: 17.183},
	                    {x: 18, val_0: -2.213, val_1: 7.937, val_2: -14.714, val_3: 19.313},
	                    {x: 19, val_0: -3.059, val_1: 9.679, val_2: -13.79, val_3: 9.728}
	                  ];
	                  $scope.options = {
	                    series: [
	                      {
	                        y: "val_0",
	                        label: "The best column series ever",
	                        color: "#2ca02c",
	                        type: "column",
	                        axis: "y"
	                      }
	                    ],
	                    axes: {x: {type: "linear", key: "x"}, y: {type: "linear"}},
	                    lineMode: "linear",
	                    tension: 0.7,
	                    tooltipMode: "dots",
	                    drawLegend: true,
	                    drawDots: true
	                  };


  });

