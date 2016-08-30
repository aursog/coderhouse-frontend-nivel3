/**
 * Created by aurso on 8/29/16.
 */

app.directive('ejemploTransclude', function() {
  return {
    restrict: 'A',
    transclude: true,
    template: '<div style="text-decoration: underline"><p ng-transclude></p></div>'
  }
});


app.controller('MainSecondCtrl', ["$scope", function($scope) {

}]);
