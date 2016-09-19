"use strict";

/**
 * Created by aurso on 9/14/16.
 */

angular.module('ejePrac03App').service('MenuService', [
  "CategoriaServices",
  function(CategoriaServices) {
    this.getMenuSuperior = function() {
      var categorias = CategoriaServices.getCategorias();
      var menuArray = [];

      for (var keyCategoria in categorias) {
        menuArray.push({
          name: categorias[keyCategoria],
          title: categorias[keyCategoria],
          url: "#/categories/" + keyCategoria
        });
      }

      return menuArray;
  };
}]);
