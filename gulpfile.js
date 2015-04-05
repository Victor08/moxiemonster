/**
 * Plugins
 */
var
    gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    less          = require('gulp-less'),
    sourcemaps    = require('gulp-sourcemaps'),
    _             = require('lodash'),
    fs            = require('fs');


/**
 * Paths
 */
var public_css    = './app/assets/css',
    resources     = './resources',
    vendor        = './resources/vendor',
    public_vendor = './app/assets/vendor';

gulp.task('default', function () {
    gulp.watch(assets + '/less/**/*.less', ['less']);
});


/**
 * Tasks
 */
gulp.task('default', function () {
    gulp.watch(resources + '/less/**/*.less', ['less']);
});
gulp.task('less', function () {
    gulp.src(resources + '/less/index.less')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less({compress: true, sourceMap: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(public_css));
});

gulp.task('public', function () {
    var config = require('./bower.json')
        , bowerrc = JSON.parse(fs.readFileSync('./.bowerrc'));

    _.each(config.public, function (includes, name) {
        _.each(includes, function (path) {
            gulp.src('./' + bowerrc.directory + '/' + name + '/' + path)
                .pipe(gulp.dest(public_vendor + '/' + name));
        });
    });
});