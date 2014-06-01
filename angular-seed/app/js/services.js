'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

var walutyService = angular.module('myApp.services', ['ngResource']);

walutyService.factory('Waluty', ['$resource',
  function($resource){
    return $resource('waluty/waluty.json', {}, {
      query: {method:'GET', params: {}, isArray:true}
    });
  }]);