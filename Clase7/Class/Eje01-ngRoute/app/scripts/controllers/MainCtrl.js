/**
 * Created by aurso on 9/12/16.
 */

angular.module('eje01App').controller('MainCtrl', [
  "$scope", "$log",
  function ($scope, $log) {
    $('#ul-menu li').on('click', function() {
      $('#ul-menu li').removeClass('active');
      $(this).addClass('active');
    });
  }
])
