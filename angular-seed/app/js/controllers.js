'use strict';

/* Controllers */

var myApp = angular.module('myApp.controllers', []);


myApp.controller('WalutyListCtrl', ['$scope', 'Waluty', function($scope, Waluty) {
setInterval(function(){
    $scope.waluty = [];
    $scope.waluty = Waluty.query();
}, 1000);
	//$scope.orderProp = 'I';
}]);
