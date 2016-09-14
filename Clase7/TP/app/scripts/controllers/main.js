'use strict';

/**
 * @ngdoc function
 * @name tp07App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp07App
 */
angular.module('tp07App').controller('MainCtrl', [
  "$scope", "listaProductosService",
  function ($scope, listaProductosService) {
    $scope.productos = listaProductosService.getListaProductos();
}]);
