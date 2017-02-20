var config       = require('../config')
var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')

var assetTasks = ['fonts', 'images']
var codeTasks = ['html', 'css', 'js']

var productionTask = function(cb) {
    global.production = true
    gulpSequence('clean', assetTasks, codeTasks, config.tasks.production.rev ? 'rev': false, cb)
}

gulp.task('production', productionTask)
module.exports = productionTask
