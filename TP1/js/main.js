/**
 * Created by aurso on 8/17/16.
 */

var app = angular.module("mycv", []);

app.controller("DatosPersonales", function($scope){
    var p = {
        nombre: "Anggelo Urso G.",
        titulo: "Ingeniero Ejecución Informática",
        casa_estudio: "UTFSM",
        pais: "Chile"
    }

    $scope.persona = p;

    $scope.openEditInput = function() {
        // Primero escondemos inputs
        $('#nombre-persona').addClass("ng-hide");
        $('#titulo-persona').addClass("ng-hide");
        $('#editButton').addClass("ng-hide");

        
    }
});

