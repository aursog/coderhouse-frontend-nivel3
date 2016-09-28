/**
 * Created by aurso on 9/14/16.
 */

angular.module('ejePrac03App').controller('TableCategoriesCtrl', [
  "$scope", "$http", "$stateParams", "$log",
  function($scope, $http, $stateParams, $log) {
    $scope.offset = 0;

    $scope.totalPage = function() {
      return new Array(4);
    };

    var promise = $http.get("https://api.mercadolibre.com/sites/MLU/search?category=" + $stateParams.idCategory, {
      params: {
        "limit": 15,
        "offset": $scope.offset
      }
    });

    $scope.cambiaPagina = function (index) {
      $scope.offset = 15*index;

      promise = $http.get($stateParams.idCategory, {
        params: {
          "limit": 15,
          "offset": $scope.offset
        }
      });

      promise.then(function(response) {
        $scope.listaArticulos = response.data.results;
      });
    };

    promise.then(function(response) {
      $scope.listaArticulos = response.data.results;
    });
  }
])
