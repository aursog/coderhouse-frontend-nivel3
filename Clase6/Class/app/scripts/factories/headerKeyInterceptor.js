/**
 * Created by aurso on 9/7/16.
 */

angular.module("class6App").factory("headerKeyInterceptor", [
  "$q", "$log",
  function($q, $log){
    var requestInterceptor = {
      request: function(config) {
        return config
      }
  };

  return requestInterceptor;
}]);
