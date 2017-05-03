  var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    replace = require('gulp-replace'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    exec = require('child_process').exec,
    browserSync = require('browser-sync').create(),
    del = require('del');


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


// Error handler
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('default', ['browser-sync'], function() {});
