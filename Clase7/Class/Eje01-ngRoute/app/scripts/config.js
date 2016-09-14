/**
 * Created by aurso on 9/12/16.
 */

angular.module('eje01App').config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: '/views/partials/_home.html',
      controller: 'HomeCtrl'
    })
    .when('/about', {
      templateUrl: '/views/partials/_about.html',
      controller: 'AboutCtrl'
    })
    .when('/contact', {
      templateUrl: '/views/partials/_contact.html'
    })
    .otherwise({
      template: '<h1>Error de p&aacute;gina</h1>'
    })
}]);
