const gulp = require('gulp'),
    sass =  require('gulp-sass'),
    csscomb = require('gulp-csscomb'),
    groupMedia = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    rename = require("gulp-rename"),
    notify = require("gulp-notify");



gulp.task('imageMIN', function() {
    return gulp.src('./*.{png,jpg,jpeg,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('../'))
        .pipe(notify('Images Compress Success!'));
});


gulp.task('CSS', function() {
    return gulp.src('style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(groupMedia())
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 3%']}))
        .pipe(csscomb())
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('../'))
        .pipe(notify('CSS Success!'));
});


gulp.task('watch_CSS', function() {
    gulp.watch('*.scss', ['CSS'])
});


gulp.task('watch_imageMIN', function() {
    gulp.watch('img/', ['imageMIN'])
});

gulp.task('default', ['CSS', 'watch_CSS']);
gulp.task('images', ['imageMIN', 'watch_imageMIN']);




