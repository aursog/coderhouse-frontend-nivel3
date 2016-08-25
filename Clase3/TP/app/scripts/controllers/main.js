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
    $scope.lastProductId = listaProductos.getLastId();
    $scope.new_product = {nombre: "", stock: 0, price: 0, id: 0};

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

    $scope.saveProduct = function() {
      $scope.new_product.id = $scope.lastProductId + 1;
      $scope.productos.push($scope.new_product);
      $scope.new_product = {nombre: "", stock: 0, price: 0, id: 0};
    }
}]);
