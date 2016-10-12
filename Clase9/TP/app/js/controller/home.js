/**
 * Created by aurso on 9/28/16.
 */

angular.module('chatFirebase').controller('HomeCtrl', [
    "$scope", "firebase", "$log",
    function($scope, firebase, $log){
        $log.debug(firebase);

}]);