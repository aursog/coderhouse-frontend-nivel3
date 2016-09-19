'use strict';

/**
 * Created by aurso on 9/14/16.
 */

angular.module('ejePrac03App').config([
  "$stateProvider", "$urlRouterProvider", "$httpProvider",
  function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/home.html'
      })
      .state('categories', {
        url: '/categories/:idCategory',
        views: {
          '': {
            templateUrl: '/views/categories-home.html',
            controller: 'HomeCategoriesCtrl'
          },
          'table@categories': {
            templateUrl: '/views/partials/_table-data.html',
            controller: 'TableCategoriesCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise("/");

    $httpProvider.interceptors.push("makerResourceUrl");
}]);
