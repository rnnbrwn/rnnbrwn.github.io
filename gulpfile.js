const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// compile scss into css
function style() {
	return (
		gulp
			// 1. Where is my scss file?
			.src('./assets/**/*.scss')

			// 2. Pass file through sass compiler
			.pipe(sass())

			// 3. Where do I save the compiled css?
			.pipe(gulp.dest('./assets/css'))
	);
}

exports.style = style;
