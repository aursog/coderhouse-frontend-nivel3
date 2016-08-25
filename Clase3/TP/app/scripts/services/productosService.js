/**
 * Created by aurso on 8/24/16.
 */

angular.module('tp3App').service('listaProductos', function(){
  this.getProductos = function() {
    return producto = [
      {
        id: 1,
        nombre: "Producto1",
        stock: 1590,
        imagen: '/url/img1.jpg',
        price: 25000
      },
      {
        id: 2,
        nombre: "Producto2",
        stock: 100,
        imagen: '/url/img2.jpg',
        price: 28990
      },
      {
        id: 3,
        nombre: "Producto3",
        stock: 5000,
        imagen: '/url/img3.jpg',
        price: 25990
      },
      {
        id: 4,
        nombre: "Producto4",
        stock: 1000,
        imagen: '/url/img4.jpg',
        price: 12500
      }
    ]
  }

  this.getLastId = function() {
    var productos = this.getProductos();
    var maxId = 0;

    productos.forEach(function(value, index){
      if (maxId < value.id) {
        maxId = value.id;
      }
    });

    return maxId;
  }
});
