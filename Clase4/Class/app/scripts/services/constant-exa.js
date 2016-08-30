/**
 * Created by aurso on 8/29/16.
 */

angular.module('tp3App').constant('CONS', 10);

angular.module('tp3App').value('valor',"Hola mundo");

angular.module('tp3App').factory('fabrica', function() {
  var manuales = ["manual1", "manual 2", "manual 3"];

  var interfaz = {
    persona: "Manolo",
    getManuales: function() {
      return manuales
    },
    nuevoManual: function(manual) {
      manuales.push(manual);
    }
  };

  return interfaz
});

/*angular.module('tp3App').provider('providerNombre', function providerNombreProvider() {
  var manuales = ["manual1", "manual 2", "manual 3"];

  var interfaz = {
    persona: "Manolo",
    getManuales: function() {
      return manuales
    },
    nuevoManual: function(manual) {
      manuales.push(manual);
    }
  };

  this.$get = ["datos", function providerNombreFactory() {
    return interfaz
  }];
});

angular.module('tp3App').config(["providerNombreProvider", function(providerNombreProvider) {
  providerNombreProvider.$get["data"];
}]);*/
