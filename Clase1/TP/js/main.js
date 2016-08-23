/**
 * Created by aurso on 8/17/16.
 */

/**
 * Controlador para Datos Personales
 */

app.controller("DatosPersonales", function($scope, $log){
    var persona = {
        nombre: "Anggelo Urso G.",
        titulo: "Ingeniero Ejecución Informática",
        casa_estudio: "UTFSM",
        pais: "Chile"
    };

    /*$log.debug("Hola curso de Frontend");
    $log.info("Esta es una información");
    $log.warn("Esta es una advertencia");
    $log.error("Esto es un error");*/

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
    };

    $scope.saveChanges = function() {
        // Primero escondemos inputs
        $('#nombre-persona').removeClass("ng-hide");
        $('#titulo-persona').removeClass("ng-hide");
        $('#editButton').removeClass("ng-hide");

        // Segundo, desplegamos lo que nos interesa
        $('#nombre-persona-input').addClass("ng-hide");
        $('#titulo-persona-input').addClass("ng-hide");
        $('#saveButton').addClass("ng-hide");
    };
});

/**
 * Controlador para Datos Laborales
 */
app.controller("DatosLaborales", function($scope, $log){
    $scope.laburos = [
        {anio: 2001, cargo: 'ingeniero', empresa: 'Napsis'}, // 0
        {anio: 2009, cargo: 'contador', empresa: 'Banco'}, // 1
        {anio: 2005, cargo: 'astronauta', empresa: 'NASA'} // 2
    ];
    $scope.hideForm = true;

    $scope.openCloseFormLaburo = function() {
        $scope.hideForm = !$scope.hideForm;
    };

    $scope.saveLaburo = function() {
        $scope.laburos.push($scope.new_laburo);
        // Nos limpia la variable del scope new_laburo
        $scope.new_laburo = {};
    }

    $scope.deleteLaburo = function(anio) {
        $scope.laburos.forEach(function(value, index) {
           if (value.anio == anio) {
               $scope.laburos[index] = {};
               return;
           }
        });
    }
});

