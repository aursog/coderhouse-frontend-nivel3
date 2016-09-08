'use strict';

/**
 * @ngdoc function
 * @name class6App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the class6App
 */
angular.module('class6App').controller('MainCtrl', [
  "$scope", "$log", "postService", "$http", "$q",
  function ($scope, $log, postService, $http, $q) {
    $scope.shEje = true;
    $scope.shTxt = "Show";

    $scope.resource = {
      url: 'https://jsonplaceholder.typicode.com/',
      title: 'API de JSON educativa',
      description: 'Typicode API - Ayuda para aprender a usar service $http'
    };

    postService.getPosts($scope.resource.url)
      .then(function(response) {
        $scope.posts = response;
      })
      .catch(function(response) {
        $scope.posts = [];
        $log.debug(response);
      });

    var objData = {
      userId: 1,
      title: 'Este es un titulo de prueba',
      body: 'Este es un texto de prueba dentro del body'
    };

    var i = 0;
    var q = $q.defer();

    $http.get($scope.resource.url + 'posts').then(function(response){
      return q.resolve(i+1);
    });

    q.promise.then(function(response) {
      $scope.valor2 = response;
    });

    // Similar a lo que está más abajo
    function lala() {
      return $.ajax({});
    }

    lala().success(function() {});

    $http.post($scope.resource.url + 'posts', objData).then(function(response){
      $scope.posts.push(response.data);
    }, function(response){
      $log.debug(response);
    });

    $scope.showHideEj = function() {
      $scope.shEje = !$scope.shEje;
      $scope.shTxt = $scope.shEje ? "Show" : "Hide";
    }

    $scope.plusOne = function(num) {
      var defered = $q.defer();
      var promise = defered.promise;

      $scope.step++;
      if (angular.isNumber(num)) {
        setTimeout(function() { defered.resolve(num+1) }, 1000);
      } else {
        defered.reject('NaN');
      }

      return promise;
    }

    $scope.step = 0;
    $scope.valor = 0;
    $scope.promise = $scope.plusOne($scope.valor);
    $scope.promise
      .then(function(v) { return $scope.plusOne(v) })
      .then(function(v) { return $scope.plusOne(v) })
      .then(function(v) { return $scope.plusOne(v) })
      .then(function(v) { return $scope.plusOne(v) })
      .then(
        function(v) { $scope.valor = v },
        function(err) { $scope.valor = err;}
      );


}]);
