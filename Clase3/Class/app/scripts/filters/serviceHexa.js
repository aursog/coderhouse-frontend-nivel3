/**
 * Created by aurso on 8/24/16.
 */

app.filter("toUpperHexa", ["lowerToUpperService", function(lowerToUpperService){
  return function(value) {
    return lowerToUpperService.toUpper(value.toString(16));
  }
}]);
