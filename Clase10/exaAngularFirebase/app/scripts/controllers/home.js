/**
 * Created by aurso on 10/11/16.
 */

angular.module('firebaseApp').controller('HomeCtrl', [
  "$scope", "$state", "FirebaseLogin",
  function($scope, $state, FirebaseLogin){
    $scope.user = {username: "", password: ""};

    $scope.submitForm = function() {
      FirebaseLogin.login($scope.user).then(function(){
        $state.go('logged', {uid: $scope.user.uid});
      });
    }
}]);

angular.module('firebaseApp').controller('InteriorCtrl', [
  "$stateParams", "$scope", "$q", function($stateParams, $scope, $q) {
    var uid = $stateParams.uid;

    /*firebase.database().ref('persona/' + uid).set({
     id: 1,
     name: 'Pedro',
     email: 'pepe@persona.cl',
     phone: '1234567'
     });*/

    var defer = $q.defer();
    var promise = defer.promise;

    firebase.database().ref('persona/' + uid).once('value').then(function (data) {
      defer.resolve(data.val());
    });

    promise.then(function(a){
      $scope.persona = a;
    })
}]);
