"use strict";

/**
 * Created by aurso on 9/14/16.
 */

angular.module("ejePrac03App").controller("MenuCtrl", [
  "$scope", "MenuService",
  function($scope, MenuService) {
    $scope.listaMenu = MenuService.getMenuSuperior();
}]);
