var gulp = require('gulp');
	sass = require('gulp-ruby-sass');
	livereload = require('gulp-livereload');
	connect = require('connect');
	server = lr();

gulp.task('sass', function () {
  return sass('scss/styles.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('http-server', function() {
    connect()
        .use(require('connect-livereload')())
        .use(connect.static('./public'))
        .listen('9000');

    console.log('Server listening on http://localhost:9000');
});

gulp.task('default', ['sass', 'watch']);

