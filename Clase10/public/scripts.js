/**
 * Created by aurso on 10/11/16.
 */

function submitForm(user, passwd) {
    var auth = firebase.auth();
    // Prompt the user to re-provide their sign-in credentials
    auth.signInWithEmailAndPassword(user, passwd).catch(function (error) {
        console.log(error.code);
        console.log(error.message);
    });
}

$(function(){
    $('#enviar').on('click', function(){
        submitForm($('#email').val(), $('#passwd').val());
    });
});


/*
var db = firebase.database();
var uid = firebase.auth().currentUser.uid;

db.ref("persona/" + uid).set({
    id: 1,
    name: "Pedro",
    email: "pepe@gmail.com",
    phone: "12345667"
});
*/
