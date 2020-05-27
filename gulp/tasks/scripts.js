const gulp = require('gulp')

const babel = require('gulp-babel')
const terser = require('gulp-terser')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')

module.exports = function script() {
  return gulp
    .src('./src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('custom.js'))
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
}
