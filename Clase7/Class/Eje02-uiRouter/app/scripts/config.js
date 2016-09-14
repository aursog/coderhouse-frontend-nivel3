/**
 * Created by aurso on 9/12/16.
 */


angular.module('eje02App').config([
  "$stateProvider", function($stateProvider) {
    $stateProvider
      .state('estado1', {
        url: '/',
        views: {
          "subvista1": {
            templateUrl: '/views/partials/_homeSubvista1.html'
          },
          "subvista2": {
            templateUrl: '/views/partials/_home.html'
          }
        }
      })
      .state('estado2', {
        url: '/about',
        templateUrl: '/views/partials/_about.html'
      })
      .state('estado3', {
        url: '/contact',
        templateUrl: '/views/partials/_contact.html'
      })
  }
]);
