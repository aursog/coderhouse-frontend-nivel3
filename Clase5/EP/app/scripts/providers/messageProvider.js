/**
 * Created by aurso on 8/31/16.
 */

function Message(text) {
  this.text = text;
}

angular.module('exeprac1App').provider("message", function() {
  var text = null;

  this.setText = function(textString) {
    text = textString;
  };

  this.$get = [function() {
    return new Message(text);
  }];
});
