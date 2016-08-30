/**
 * Created by aurso on 8/29/16.
 */

angular.module("tp3App").directive("directivaEjemplo", function() {
 return {
   restrict: 'MAEC',
   template: "<h1></h1>",
   templateUrl: "",
   replace: true, // false
   link: function(scope, element, attr) {

   },
   scope: {
   },
   transclude: true // false
 }
});

