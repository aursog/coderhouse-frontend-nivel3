'use strict';

/**
 * @ngdoc function
 * @name tp3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tp3App
 */

app.controller('MainCtrl', ["$scope", "listaProductos", "$log",
  function ($scope, listaProductos, $log) {
    $scope.productos = listaProductos.getProductos();

    $scope.columnOrder = function(column) {
      if ($scope.order == column) {
        $scope.asc = !$scope.asc;
      } else {
        $scope.asc = false;
      }

      $scope.order = column;
    }

    $scope.deleteProducto = function(id) {
      $scope.productos.forEach(function(value, index) {
        if (value.id == id) {
          $scope.productos.splice(index, 1);
          return
        }
      });
    }
}]);
