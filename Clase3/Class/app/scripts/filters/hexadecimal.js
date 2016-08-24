/**
 * Created by aurso on 8/24/16.
 */

app.filter("hexadecimal", function(){
  return function(valor) {
    return valor.toString(16);
  }
});
