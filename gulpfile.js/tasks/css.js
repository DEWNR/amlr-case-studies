var config       = require('../config')
if(!config.tasks.css) return

var ant          = require('postcss-ant')
var autoprefixer = require('autoprefixer')
var browserSync  = require('browser-sync')
var gulp         = require('gulp')
var gulpif       = require('gulp-if')
var mqpacker     = require('css-mqpacker')
var path         = require('path')
var postcss      = require('gulp-postcss')
var rucksack     = require('gulp-rucksack')
var sass         = require('gulp-sass')
var sourcemaps   = require('gulp-sourcemaps')

var paths = {
    src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
    dest: path.join(config.root.dest, config.tasks.css.dest)
}

var processors = [
    ant,
    rucksack,
    autoprefixer({browsers:['last 2 versions']}),
    mqpacker
]

var cssTask = function () {
    return gulp.src(paths.src)
        .pipe(gulpif(!global.production, sourcemaps.init()))
        .pipe(sass(config.tasks.css.sass))
        .pipe(rucksack())
        .pipe(postcss(processors))
        .pipe(gulpif(!global.production, sourcemaps.write()))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())
}

gulp.task('css', cssTask)
module.exports = cssTask
