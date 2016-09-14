/**
 * Created by aurso on 9/12/16.
 */


angular.module('tp07App').config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('editarProducto', {
      url: '/editar/:productId',
      templateUrl: '/views/partials/form-producto.html',
      controller: 'EditarProdCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: '/views/main.html',
      controller: 'MainCtrl'
  });

  $urlRouterProvider.otherwise('/');
}]);
