'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/sass/app.scss')
  	.pipe(sass({
  		outputStyle: 'compressed',
  		includePaths: ['./assets/sass/**/*.scss']
  	})
        .on('error', sass.logError))

    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});
