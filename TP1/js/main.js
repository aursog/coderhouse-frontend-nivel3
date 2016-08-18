/**
 * Created by aurso on 8/17/16.
 */

var app = angular.module("mycv", []);

app.controller("DatosPersonales", function($scope){
    var persona = {
        nombre: "Anggelo Urso G.",
        titulo: "Ingeniero Ejecución Informática",
        casa_estudio: "UTFSM",
        pais: "Chile"
    };

    $scope.persona = persona;

    $scope.openEditInput = function() {
        // Primero escondemos inputs
        $('#nombre-persona').addClass("ng-hide");
        $('#titulo-persona').addClass("ng-hide");
        $('#editButton').addClass("ng-hide");

        // Segundo, desplegamos lo que nos interesa
        $('#nombre-persona-input').removeClass("ng-hide");
        $('#titulo-persona-input').removeClass("ng-hide");
        $('#saveButton').removeClass("ng-hide");
    }

    $scope.saveChanges = function() {
        // Primero escondemos inputs
        $('#nombre-persona').removeClass("ng-hide");
        $('#titulo-persona').removeClass("ng-hide");
        $('#editButton').removeClass("ng-hide");

        // Segundo, desplegamos lo que nos interesa
        $('#nombre-persona-input').addClass("ng-hide");
        $('#titulo-persona-input').addClass("ng-hide");
        $('#saveButton').addClass("ng-hide");
    }
});

app.controller("DatosLaborales", function($scope){
    var laburos = [];

    $scope.saveLaburo = function() {
        laburos.push($scope.new_laburo);
    }

    $scope.laburos = laburos;
});

