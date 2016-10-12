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
