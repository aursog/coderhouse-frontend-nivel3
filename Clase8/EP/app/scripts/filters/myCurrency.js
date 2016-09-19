"use strict";

/**
 * Created by aurso on 9/14/16.
 */

angular.module("ejePrac03App").filter("myCurrency", [
  function() {
    return function(value, currency_id) {
      if (currency_id == "USD") {
        return "USD$" + value;
      } else {
        return "$" + value;
      }
    };
  }
]);
