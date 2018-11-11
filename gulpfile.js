let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let minify = require('gulp-minify');

gulp.task('minify-css', function () {
	gulp.src('src/css/*.css')
		.pipe(cleanCSS())
    .pipe(gulp.dest('test_folder/css'));
});

gulp.task('minify-js', function() {
	gulp.src('src/js/*.js')
		.pipe(minify())
		.pipe(gulp.dest('test_folder/js'))
});