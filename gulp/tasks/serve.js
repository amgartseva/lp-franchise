const gulp = require('gulp')

const imageMinify = require('./images')
const svgSprite = require('./svg')
const styles = require('./styles')
const script = require('./scripts')

const server = require('browser-sync').create()

module.exports = function serve(cb) {
  server.init({
    server: './',
    notify: false,
    open: true,
    cors: true,
  })

  gulp
    .watch('src/images/*.{gif,png,jpg,webp}', gulp.series(imageMinify))
    .on('change', server.reload)
  gulp
    .watch('src/svg/*.svg', gulp.series(svgSprite))
    .on('change', server.reload)
  gulp.watch(
    'src/scss/*.scss',
    gulp.series(styles, (cb) =>
      gulp.src('build/css').pipe(server.stream()).on('end', cb)
    )
  )
  gulp.watch('src/js/*.js', gulp.series(script)).on('change', server.reload)
  gulp.watch('./*.html').on('change', server.reload)

  return cb()
}
