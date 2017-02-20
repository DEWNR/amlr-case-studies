var config = require('../config')
var del    = require('del')
var gulp   = require('gulp')

var cleanTask = function (cb) {
    del([config.root.dest]).then(function (paths) {
        cb()
    })
}

gulp.task('clean', cleanTask)
module.exports = cleanTask
