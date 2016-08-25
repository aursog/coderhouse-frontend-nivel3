/**
 * Created by aurso on 8/24/16.
 */

angular.module("tp3App").filter("commaToPoint", function() {
  return function(value) {
    return value.replace(/,/g, '.');
  }
});
