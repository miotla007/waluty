'use strict';

/* Controllers */

var myApp = angular.module('myApp.controllers', []);

myApp.controller('WalutyListCtrl', function ($scope, $http) {
  $http.get('waluty/waluty.json').success(function(data) {
    $scope.waluty = data;
    console.log(waluty);
  });

  $scope.orderProp = 'I';
});
