/**
 * Created by aurso on 9/28/16.
 */

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-ruby-sass'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('webserver', function(){
   gulp.src('app').pipe(webserver({
       livereload: true,
       open: true,
       directoryListing: false
   }));
});

gulp.task('styles', function(){
    return sass('app/sass/*.scss', { style: 'expanded'})
        .pipe(gulp.dest('app/css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('app/css/'))
        .pipe(notify({ message: 'Style task completa'}));
});

gulp.task('scripts', function(){
   return gulp.src('app/js/**/*.js')
       .pipe(concat('main.js'))
       .pipe(gulp.dest('app/minjs'))
       .pipe(rename({suffix: '.min'}))
       .pipe(uglify())
       .pipe(gulp.dest('app/minjs'))
       .pipe(notify({ message: 'Scripts task completa'}))
});

gulp.task('clean', function(){
   return del(['app/css', 'app/minjs']);
});

gulp.task('default', ['clean', 'watch', 'webserver', 'styles', 'scripts']);

gulp.task('watch', function () {
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/sass/*.scss', ['styles']);
    gulp.watch('app/*.html', livereload.changed)
});