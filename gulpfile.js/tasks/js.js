var config       = require('../config')
if(!config.tasks.js) return

var browserSync  = require('browser-sync')
var concat       = require('gulp-concat')
var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var path         = require('path')
var sourcemaps   = require('gulp-sourcemaps')
var uglify       = require('gulp-uglify')

var paths = {
    src: path.join(config.root.src, config.tasks.js.src),
    dest: path.join(config.root.dest, config.tasks.js.dest)
}

var jsTask = function () {
    config.tasks.js.files.forEach(function (bundle) {
        return gulp.src(bundle.source)
            .pipe(gulpif(!global.production, sourcemaps.init()))
            .pipe(concat(bundle.filename))
            .pipe(gulpif(!global.production, sourcemaps.write()))
            .pipe(gulp.dest(paths.dest))
            .pipe(browserSync.stream())
    });
}

gulp.task('js', jsTask)
module.exports = jsTask
