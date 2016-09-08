/**
 * Created by aurso on 9/7/16.
 */

angular.module("class6App").service("postService", ["$http", "$q", function($http, $q) {
  this.getPosts = function(url) {
    var defered = $q.defer();
    var promise = defered.promise;

    $http.get(url + 'posts').then(function(response) {
      defered.resolve(response.data);
    }, function(response){
      defered.reject(response.status);
    });

    return promise;
  }
}]);
