/**
 * Created by aurso on 9/7/16.
 */

angular.module("class6App").config(['$httpProvider', function($httpProvider){
  $httpProvider.interceptors.push('headerKeyInterceptor');
}]);
