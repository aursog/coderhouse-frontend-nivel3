/**
 * Created by aurso on 8/22/16.
 */

var app1 = angular.module("modulo1", []);

app1.controller("ControllerModulo1", function($scope, $log){
    $scope.nombre="ControllerModulo1";
});

angular.module("modulo1").controller("ControllerModulo2", function($scope){
   $scope.nombre="ControllerModulo2";
});