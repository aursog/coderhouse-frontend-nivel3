/**
 * Created by aurso on 8/31/16.
 */

angular.module("exeprac1App").directive("searchMessage", ["$log", function($log) {
  function link(scope, element, attr) {
    attr.$observe("type", function(value) {
      if (value != "") {
        var div = document.createElement("div");

        if (value == "error") {
          div.className = "alert alert-danger";
        } else if (value == "warn") {
          div.className = "alert alert-warning";
        } else if (value == "success") {
          div.className = "alert alert-success";
        }

        div.textContent = scope.responseMessage;
        element.append(div);
      } else {
        element.find('div.alert').remove();
      }
    });
  }

  return {
    restrict: "AE",
    link: link
  }
}]);
