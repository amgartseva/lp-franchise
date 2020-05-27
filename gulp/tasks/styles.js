const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')

module.exports = function styles() {
  return gulp
    .src('src/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(shorthand())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
}
