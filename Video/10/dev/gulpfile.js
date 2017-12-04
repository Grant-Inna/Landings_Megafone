const gulp = require('gulp'),
    sass =  require('gulp-sass'),
    groupMedia = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify"),
    browserSync = require("browser-sync").create(),
    sourcemaps = require("gulp-sourcemaps");


gulp.task( 'browser', function() {
    browserSync.init({
        server: {
            baseDir: '../'
        }
    });
});

gulp.task('imageMIN', function() {
    return gulp.src( '*.{png,jpg,jpeg,svg}' )
        .pipe(imagemin())
        .pipe(gulp.dest( '../' ))
        .pipe(notify('Images Compress Success!'));
});


gulp.task('CSS', function() {
    return gulp.src( 'style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '../' ))
        .pipe(notify('CSS Success!'));
});


gulp.task('watch_CSS', ['browser'], function() {
    gulp.watch('*.scss', ['CSS']);
    gulp.watch('*.scss').on('change', browserSync.reload)
});


gulp.task('watch_imageMIN', ['browser'], function() {
    gulp.watch('*.{png,jpg,jpeg,svg}', ['imageMIN']);
    gulp.watch('*.{png,jpg,jpeg,svg}').on('change', browserSync.reload)
});

gulp.task('default', ['CSS', 'watch_CSS']);
gulp.task('images', ['imageMIN', 'watch_imageMIN']);




