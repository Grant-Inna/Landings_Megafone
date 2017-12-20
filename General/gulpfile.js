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



gulp.task('CSS1', function() {
    return gulp.src( '01/dev/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '01/' ))
        .pipe(notify('CSS1 Success!'));
});


gulp.task('CSS2', function() {
    return gulp.src( '02/dev/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '02/' ))
        .pipe(notify('CSS2 Success!'));
});


gulp.task('CSS3', function() {
    return gulp.src( '03/dev/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '03/' ))
        .pipe(notify('CSS3 Success!'));
});


gulp.task('CSS4', function() {
    return gulp.src( '04/dev/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '04/' ))
        .pipe(notify('CSS4 Success!'));
});


gulp.task('CSS5', function() {
    return gulp.src( '05/dev/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '05/' ))
        .pipe(notify('CSS5 Success!'));
});




var all = [ 'CSS1', 'CSS2', 'CSS3', 'CSS4', 'CSS5' ];

gulp.task( 'default', all);




