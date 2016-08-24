'use strict';

/**
 * @ngdoc function
 * @name clase3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clase3App
 */
app.controller('MainCtrl', ["$scope", function ($scope) {
  $scope.tasks = [];
  $scope.new_task = {};

  $scope.saveTarea = function() {
    $scope.tasks.push($scope.new_task);
    $scope.new_task = {};
  }
}]);
