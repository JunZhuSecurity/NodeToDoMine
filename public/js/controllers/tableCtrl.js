angular.module("todoController")
	.controller("tableCtrl", function($scope) {
		$scope.persons = [
			{"FirstName": "John", "LastName": "Doe", "Country": "USA"},	
			{"FirstName": "John", "LastName": "Dalton", "Country": "UK"}
			];
	});