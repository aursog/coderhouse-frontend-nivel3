var gulp = require('gulp')
    webserver = require('gulp-webserver');

var ruta = '.'
var server = {
    host: 'localhost',
    port: '9000'
}

gulp.task('default', ['ws', 'watch']);

gulp.task('ws', function(){
   gulp.src(ruta).pipe(webserver({
       host: server.host,
       port: server.port,
       livereload: true,
       directoryListing: false,
       open: true
       })
   );
});

gulp.task('watch', function(){
    gulp.watch('*.js', ['jsminify']);
});

gulp.task('jsminify', function(){
    console.log("Hola mundo");
});

gulp.task('build', ['jsminify']);