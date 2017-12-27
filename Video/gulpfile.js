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



gulp.task('CSS6', function() {
    return gulp.src( '06/dev/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(groupMedia())
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '06/' ))
        .pipe(notify('CSS6 Success!'));
});


gulp.task('CSS7', function() {
    return gulp.src( '07/dev/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(groupMedia())
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '07/' ))
        .pipe(notify('CSS7 Success!'));
});


gulp.task('CSS8', function() {
    return gulp.src( '08/dev/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(groupMedia())
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '08/' ))
        .pipe(notify('CSS8 Success!'));
});


gulp.task('CSS9', function() {
    return gulp.src( '09/dev/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(groupMedia())
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '09/' ))
        .pipe(notify('CSS9 Success!'));
});


gulp.task('CSS10', function() {
    return gulp.src( '10/dev/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe(groupMedia())
        .pipe(cleanCSS())
        .pipe(rename( {suffix: '.min'} ))
        .pipe(sourcemaps.write('dev/'))
        .pipe(gulp.dest( '10/' ))
        .pipe(notify('CSS10 Success!'));
});

gulp.task( 'watch__common', function() {
    gulp.watch('common.scss', all);
});


var all = [ 'CSS1', 'CSS2', 'CSS3', 'CSS4', 'CSS5', 'CSS6', 'CSS7', 'CSS8', 'CSS9', 'CSS10' ];

gulp.task( 'default', [ all, 'watch__common'] );




