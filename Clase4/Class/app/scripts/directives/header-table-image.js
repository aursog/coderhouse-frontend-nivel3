/**
 * Created by aurso on 8/29/16.
 */

angular.module("tp3App").directive("headerTableImage", function() {
  return function(scope, element, attr) {
    attr.$observe('headerTableImage', function(value) {
      $(element).css({
        background: "url(" + value + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "50px",
        width: "50px"
      });
    });
  }
});
