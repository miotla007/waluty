'use strict';

/* Controllers */

var myApp = angular.module('myApp.controllers', []);

myApp.controller('WalutyListCtrl', function ($scope, $http) {
	//var query = 'http://marketools.plus500.com/Feeds/UpdateTable?instsIds=56,55,2,100,27,5,177,305'
  $http.get('waluty/waluty.json').success(function(data) {
    $scope.waluty = data;
    //console.log(waluty);
  });

  //$scope.orderProp = 'I';
});
