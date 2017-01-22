// var gulp = require('gulp');

// gulp.task('hello', function() {
//   console.log('Hello gulp!');
// });

// gulp.task('default', ['hello']);



var gulp = require('gulp');
var connect = require('gulp-connect');
var browserSync = require('browser-sync');

// gulp.task('connect', function() {
//   connect.server({
//     root: './',
//     livereload: true
//   });
// });

// gulp.task('html', function () {
//   gulp.src('./*.html')
//     .pipe(connect.reload());
// });

// gulp.task('watch', function () {
//   gulp.watch(['./*.html'], ['html']);
// });


// Static server
gulp.task('browser-sync', function() {
	console.log('-----run browser-sync-----')
    browserSync({
        server: {
            baseDir: "./htdocs_dev"
        }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
	console.log('-----run bs-reload-----')
    browserSync.reload();
});

// Watch scss AND html files, doing different things with each.
gulp.task('default', ['browser-sync'], function () {
	console.log('-----run default-----')
    gulp.watch("./*/*.html", ['bs-reload']);
});

// gulp.task('default', function() {
//   // place code for your default task here
// });

// gulp.task('default', ['browser-sync']);
