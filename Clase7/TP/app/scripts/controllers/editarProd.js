/**
 * Created by aurso on 9/12/16.
 */


angular.module('tp07App').controller('EditarProdCtrl', [
  "$scope", "$stateParams", "$log", "listaProductosService",
  function($scope, $stateParams, $log, listaProductosService) {
    var productos = listaProductosService.getListaProductos();
    var indexResultado;

    $scope.productoClase1 = true;

    productos.forEach(function(value, index){
      if (value.id == $stateParams.productId) {
        $scope.producto = value;
        $scope.productoClase1 = value.tipo == 1;
        indexResultado = index;
        return;
      }
    });
  }
]);
