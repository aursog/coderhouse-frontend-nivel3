/**
 * Created by aurso on 9/14/16.
 */

angular.module("ejePrac03App").directive("selectedPage", [
  "$log",
  function($log) {
    function link(scope, element, attr) {
      if (scope.offset == 0) {
        $('.paginator').eq(0).removeClass('btn-default').addClass('btn-danger');
      } else {
        $('.paginator').removeClass('btn-danger').removeClass('btn-default');
        $('.paginator').addClass('btn-default');
        $('.paginator').eq(index).addClass('btn-danger');
      }
    };

    return {
      link: link
    }
}]);
