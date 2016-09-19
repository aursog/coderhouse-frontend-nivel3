"use strict";
/**
 * Created by aurso on 9/14/16.
 */

angular.module("ejePrac03App").filter('accentsToHtml', [function() {
  return function(value) {
    value
      .replace(/á/g, '&aacute;')
      .replace(/é/g, '&eacute;')
      .replace(/í/g, '&iacute;')
      .replace(/ó/g, '&oacute;')
      .replace(/ú/g, '&uacute;')
      .replace(/ñ/g, '&ntilde;');

    return value;
  };
}]);
