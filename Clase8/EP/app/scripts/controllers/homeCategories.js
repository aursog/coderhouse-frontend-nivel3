"use strict";

/**
 * Created by aurso on 9/14/16.
 */

angular.module("ejePrac03App").controller("HomeCategoriesCtrl", [
  "$scope", "$stateParams", "CategoriaServices",
  function($scope, $stateParams, CategoriaServices) {
    var categorias = CategoriaServices.getCategorias();
    $scope.categoria = categorias[$stateParams.idCategory];
  }
]);
