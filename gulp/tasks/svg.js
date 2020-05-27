const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = function svgSprite() {
  return gulp
    .src('src/svg/*.svg')
    .pipe(
      imagemin([
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest('build/svg'))
}
