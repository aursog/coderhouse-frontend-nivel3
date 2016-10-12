/**
 * Created by aurso on 10/11/16.
 */

angular.module('firebaseApp').service('FirebaseLogin', ["$log", "$q", function($log, $q){
  this.login = function(user) {
    var defer = $q.defer();
    var promise = defer.promise;

    return firebase.auth().signInWithEmailAndPassword(user.username, user.password).then(function(data){
      defer.resolve(firebase.auth().currentUser.uid);
      user.uid = firebase.auth().currentUser.uid;
    }).catch(function (error) {
      defer.reject();
      $log.error(error.code);
      $log.error(error.message);
    });

    return promise;
  }
}]);
