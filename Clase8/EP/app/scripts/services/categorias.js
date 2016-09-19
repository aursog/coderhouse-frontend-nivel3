"use strict";

/**
 * Created by aurso on 9/14/16.
 */

angular.module('ejePrac03App').service('CategoriaServices', [function() {
  this.getCategorias = function() {
    return {
      MLU1051: "Celulares y telefonía",
      MLU1648: "Computación"
    };
  };
}]);
