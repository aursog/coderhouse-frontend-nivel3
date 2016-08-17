/**
 * Created by aurso on 8/17/16.
 */

var app = angular.module("clase1", []);

app.controller("ControladorUno", function($scope) {
    $scope.nombre = "Ariel";
    $scope.condicion = false;

    $scope.apagaEtiqueta = function() {
        var elem = document.getElementById("otraShow");

        if (elem.className == "ng-hide") {
            elem.className = "ng-show";
        } else {
            elem.className = "ng-hide";
        }
    }
});
