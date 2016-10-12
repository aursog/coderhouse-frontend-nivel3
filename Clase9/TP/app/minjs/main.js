/**
 * Created by aurso on 9/28/16.
 */

angular.module('chatFirebase', ['ui.router', 'firebase']);
/**
 * Created by aurso on 9/28/16.
 */

angular.module('chatFirebase').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        /*$stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            });*/

        $urlRouterProvider.otherwise("/");
    }
]);

/**
 * Created by aurso on 9/28/16.
 */

angular.module('chatFirebase').controller('HomeCtrl', [
    "$scope", "firebase", "$log",
    function($scope, firebase, $log){
        $log.debug(firebase);

}]);