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
	);
}

exports.style = style;
