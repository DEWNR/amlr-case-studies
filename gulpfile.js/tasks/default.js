var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')

var assetTasks = ['fonts', 'images', 'icons']
var codeTasks = ['html', 'css', 'js']

var defaultTask = function(cb) {
    gulpSequence('clean', assetTasks, codeTasks, 'watch', cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask
