var gulp = require('gulp');
	sass = require('gulp-ruby-sass');
	connect = require('gulp-connect');

  var outputDir = 'dist'

  gulp.task('sass', function () {
    return sass('scss/styles.scss')
      .on('error', sass.logError)
      .pipe(gulp.dest('dist/css'))
      .pipe(connect.reload());
  });

  gulp.task('webserver', function() {
    connect.server({
      root: [outputDir],
      livereload: true
    });
  });



gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
})


gulp.task('default', ['sass', 'webserver', 'watch']);

