'use strict';

/**
 * @ngdoc overview
 * @name exeprac1App
 * @description
 * # exeprac1App
 *
 * Main module of the application.
 */
angular.module('exeprac1App', [
  "LocalStorageModule"
]);

angular.module('exeprac1App').config(["messageProvider", function(messageProvider) {
  messageProvider.setText("Producto ingresado con éxito");
}]);
