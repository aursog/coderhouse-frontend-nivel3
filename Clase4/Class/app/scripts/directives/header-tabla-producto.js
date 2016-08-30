/**
 * Created by aurso on 8/29/16.
 */

angular.module('tp3App').directive('headerTabla', function() {
  return {
    restrict: 'M',
    replace: true,
    template: '<h3>Tabla de productos</h3>'
  }
});
