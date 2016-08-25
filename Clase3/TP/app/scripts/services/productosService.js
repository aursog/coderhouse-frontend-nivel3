/**
 * Created by aurso on 8/24/16.
 */

angular.module('tp3App').service('listaProductos', function(){
  this.getProductos = function() {
    return producto = [
      {
        id: 1,
        nombre: "Producto1",
        stock: 1590
      },
      {
        id: 2,
        nombre: "Producto2",
        stock: 100
      },
      {
        id: 3,
        nombre: "Producto3",
        stock: 5000
      },
      {
        id: 4,
        nombre: "Producto4",
        stock: 1000
      }
    ]
  }
});
