var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var webpack = require('webpack-stream');

gulp.task('sass-render', function () {
	return gulp
	.src('src/sass/*.sass')
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(rename({ suffix: '.min' }))
	.pipe(minify())
	.pipe(gulp.dest('public/assets/'))
});

gulp.task('sass-watch', function () {
	gulp.watch('src/sass/*.sass', ['sass-render'])
});

gulp.task('webpack', function () {
	return gulp.src('src/App.js')
	.pipe(webpack( require('./webpack.config.js') ))
	.pipe(gulp.dest('public/assets/'))
});

gulp.task('default', ['sass-render','sass-watch','webpack']);