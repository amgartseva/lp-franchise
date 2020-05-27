const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/scripts')
const fonts = require('./gulp/tasks/fonts')
const images = require('./gulp/tasks/images')
const clean = require('./gulp/tasks/clean')
const svg = require('./gulp/tasks/svg')

const dev = gulp.parallel(styles, script, fonts, images, svg)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(build, serve)
module.exports.build = build
