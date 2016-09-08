'use strict';

/**
 * @ngdoc function
 * @name tp6App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp6App
 */
angular.module('tp6App')
  .controller('MainCtrl', [
    "$http", "$scope", "$log", "serviceProduct",
    function ($http, $scope, $log, serviceProduct) {
      serviceProduct.getProducts()
        .then(function(response){
          $scope.products = response.results;
        });
  }]);
