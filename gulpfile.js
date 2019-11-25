const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
	return (
		gulp
			// 1. Where is my scss file?
			.src('./scss/**/*.scss')

			// 2. Pass file through sass compiler
			.pipe(sass())

			// 3. Where do I save the compiled css?
			.pipe(gulp.dest('./css'))

			// 4. Stream changes to all browsers
			.pipe(browserSync.stream())
	);
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './',
			index: 'index.htm'
		}
	});
	gulp.watch('./scss/**/*.scss', style);
	gulp.watch('./*.htm').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
