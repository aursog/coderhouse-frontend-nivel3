'use strict';

/**
 * @ngdoc function
 * @name exeprac1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exeprac1App
 */
angular.module('exeprac1App').controller('MainCtrl', [
  "$scope", "$log", "localStorageService", "listaProductosService", "message",
  function ($scope, $log, localStorageService, listaProductosService, message) {
    $scope.searchText = "";

    var options = {
      keys: [{name: 'nombre'}],
      include: ["score"]
    };

    if (localStorageService.get("productos-empresa")) {
      $scope.productos = localStorageService.get("productos-empresa");
    } else {
      $scope.productos = listaProductosService.getListaProductos();
      localStorageService.set("productos-empresa", $scope.productos);
    }

    if (localStorageService.get("productos-venta")) {
      $scope.listaProductosVentas = localStorageService.get('productos-venta');
    } else {
      $scope.listaProductosVentas = [];
    }

    var fuse = new Fuse($scope.productos, options);

    $scope.getProducto = function(value) {
      $scope.responseType = "";
      $scope.responseMessage = "";

      var result = fuse.search(value);

      if (result.length == 0) {
        $scope.responseType = "error";
        $scope.responseMessage = "No se han encontrado el producto";
      } else if (result.length == 1) {
        $scope.listaProductosVentas.push(result[0].item);
        $scope.responseMessage = message.text;
        $scope.responseType = "success";
      }

      $scope.resultSearch = result;
    }

    $scope.addToList = function(element) {
      $scope.listaProductosVentas.push(element);
    }

    $scope.$watchCollection("listaProductosVentas", function(newvalue, oldvalue) {
      localStorageService.set('productos-venta', newvalue);
    });

    $scope.cleanVenta = function() {
      $scope.listaProductosVentas = [];
    }
}]);
