/**
 * Created by aurso on 9/28/16.
 */

var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('default', ['ws', 'watch']);

gulp.task('ws', function() {
    gulp.src('app').pipe(webserver({
        livereload: true,
        open: true,
        directoryListing: false
    }));
});

gulp.task('watch', function(){

});
