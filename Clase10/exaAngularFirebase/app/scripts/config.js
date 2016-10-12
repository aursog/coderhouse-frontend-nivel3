/**
 * Created by aurso on 10/11/16.
 */

var config = {
  apiKey: "AIzaSyC-RwXy-UHmzt9nGsG9bdBRhOozp4fRxNQ",
  authDomain: "class8-coderhouse.firebaseapp.com",
  databaseURL: "https://class8-coderhouse.firebaseio.com",
  storageBucket: "class8-coderhouse.appspot.com",
  messagingSenderId: "898776885314"
};

firebase.initializeApp(config);

angular.module('firebaseApp').config([
  "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
      })
      .state('logged', {
        url: '/in/:uid',
        templateUrl: '/views/logged.html',
        controller: 'InteriorCtrl'
      });

    $urlRouterProvider.otherwise('/');

  }
])
