/**
 * Created by aurso on 8/24/16.
 */
angular.module("moduleService", []).service("lowerToUpperService", function() {
  this.toUpper = function (value) {
    return value.toUpperCase();
  };
});
