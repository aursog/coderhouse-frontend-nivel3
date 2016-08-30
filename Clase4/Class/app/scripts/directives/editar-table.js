/**
 * Created by aurso on 8/29/16.
 */

angular.module("tp3App").directive("editarElement", function(){
  function functionLink(scope, element, attr) {
    console.log(element);
  }
  return {
    link: functionLink
  }
});
