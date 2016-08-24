/**
 * Created by aurso on 8/24/16.
 */

angular.module("moduleService", []).service("lowerToUpperService", function(){
    this.toLower = function(value) {
        return value.toLowerCase();
    };

    this.toUpper = function(value) {
        return value.toUpperCase();
    };

    this.firstToUpper = function(value) {
        var valor = value.toLowerCase();
        var first = valor[0].toUpperCase();
        valor = first + valor.substr(1, valor.length);
        return valor;
    }
});