/**
 * Created by aurso on 9/7/16.
 */

angular.module("class6App").config(['$httpProvider', '$stateProvider', function($httpProvider, $stateProvider){
  $httpProvider.interceptors.push('headerKeyInterceptor');

  $stateProvider.state('estado1', {
    url: '/home',
    template: "<div>Hola</div>"
  });
}]);
