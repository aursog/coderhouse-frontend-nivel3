/**
 * Created by aurso on 9/14/16.
 */

angular.module("ejePrac03App").factory("makerResourceUrl", [
  "$log", "CategoriaServices",
  function($log, CategoriaServices) {
    var listaCategorias = CategoriaServices.getCategorias();

    var urlInjector = {
      request: function(config) {
        if (listaCategorias[config.url]) {
          config.url = "https://api.mercadolibre.com/sites/MLU/search?category=" + config.url;
        }

        return config;
      }
    };

    return urlInjector;
  }
]);
