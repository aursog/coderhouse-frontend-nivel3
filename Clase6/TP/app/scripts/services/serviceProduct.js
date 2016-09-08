/**
 * Created by aurso on 9/7/16.
 */

angular.module("tp6App").service("serviceProduct", ["$http", "$q", function($http, $q) {
  this.getProducts = function() {
    var deferred = $q.defer();
    var uri = "https://api.mercadolibre.com/sites/MLU/search";
    var config = {
      params: {
        category: "MLU1743",
        attributes: "results",
        limit: 20,
        offset: 0,
        condition: "new"
      }
    };

    $http.get(uri, config)
      .then(function(response) {
        deferred.resolve(response.data);
      });

    return deferred.promise;
  }
}])
