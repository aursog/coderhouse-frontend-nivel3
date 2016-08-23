'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */

app.controller('MainCtrl', ["$scope", "$log", function ($scope, $log) {
  $scope.alumnos = [
    {
      nombre: "Pedro",
      apellido: "Gonzalez",
      edad: 21,
      notas: []
    },
    {
      nombre: "Maria",
      apellido: "Salvadore",
      edad: 23,
      notas: []
    },
    {
      nombre: "Gustavo",
      apellido: "Vivallos",
      edad: 31,
      notas: []
    }
  ];

  $scope.deleteCard = function(index) {
    $scope.alumnos[index] = {};
    $('.tarjeta').eq(index).addClass('ng-hide');
  }

  $scope.saveNotaAlumno = function(index) {
    $scope.alumnos[index].notas.push($scope.alumnos[index].nota_alumno);
    $scope.alumnos[index].nota_alumno = "";

    var promedio = 0;

    $scope.alumnos[index].notas.forEach(function(nota) {
      promedio += parseInt(nota);
    });

    promedio = promedio / $scope.alumnos[index].notas.length;

    $scope.alumnos[index].promedio = promedio;
  }

  $scope.addNota = function(index) {
    var element = $('.form-nota').eq(index);
    element.toggleClass('ng-hide');
  }
}]);
