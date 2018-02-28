var gulp = require('gulp'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    groupMedia = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    rename = require("gulp-rename"),
    browserSync = require("browser-sync").create(),
    notify = require("gulp-notify");


gulp.task( 'browser', function() {
    browserSync.init({
        server: {
            baseDir: 'out/'
        }
    });
});

gulp.task('imageMIN', function() {
    return gulp.src( 'src/*.{png,jpg,jpeg,svg}' )
        .pipe(imagemin())
        .pipe(gulp.dest( 'out/' ))
        .pipe(notify('Images Compress Success!'));
});


gulp.task('CSS', function() {
    return gulp.src( 'style.less' )
        .pipe(groupMedia())
        .pipe(less())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest( 'out/' ))
        .pipe(notify('CSS Success!'));
});


gulp.task('watch_CSS', ['browser'], function() {
    gulp.watch('*.less', ['CSS']);
    gulp.watch('*.less').on('change', browserSync.reload)
});


gulp.task('watch_imageMIN', function() {
    gulp.watch('src/*.{png,jpg,jpeg,svg}', ['imageMIN']);
    gulp.watch('src/*.{png,jpg,jpeg,svg}').on('change', browserSync.reload)
});


gulp.task('watch_JADE', ['browser'], function() {
    gulp.watch('*.jade', ['jade']);
    gulp.watch('*.jade').on('change', browserSync.reload)
});

gulp.task('jade', function() {
    return gulp.src( 'index.jade' )
        .pipe(jade())
        .pipe(gulp.dest( 'out/' ))
        .pipe(notify('JADE Success!'));
});



gulp.task('default', ['jade', 'watch_JADE', 'CSS', 'watch_CSS', 'imageMIN']);
gulp.task('images', ['imageMIN', 'watch_imageMIN']);
