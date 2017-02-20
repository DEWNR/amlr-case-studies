var config       = require('../../config')
var cssnano      = require('gulp-cssnano')
var gulp         = require('gulp')
var path         = require('path')
var replace      = require('gulp-replace')
var rev          = require('gulp-rev')
var revNapkin    = require('gulp-rev-napkin');

// 2) Rev and compress CSS files (this is done after assets, so that if a
//    referenced asset hash changes, the parent hash will change as well
gulp.task('rev-css', function(){
    return gulp.src(path.join(config.root.dest,'/**/*.css'))
        .pipe(rev())
        .pipe(cssnano({discardComments: {removeAll: true}}))
        .pipe(replace('../images/', '')) // fix for seamless template path
        .pipe(replace('../fonts/', '/assets/fonts/')) // fix for seamless template path
        .pipe(gulp.dest(config.root.dest))
        .pipe(revNapkin({verbose: false}))
        .pipe(rev.manifest(path.join(config.root.dest, 'rev-manifest.json'), {merge: true}))
        .pipe(gulp.dest(''))
})
