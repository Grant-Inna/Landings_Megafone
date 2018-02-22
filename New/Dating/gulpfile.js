const gulp = require('gulp'),
    smartGrid = require('smart-grid'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    groupMedia = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    browserSync = require("browser-sync").create(),
    notify = require("gulp-notify");





var StyleTasks = [ 'CSS-1', 'CSS-2', 'CSS-3', 'CSS-4', 'CSS-5', 'CSS-6', 'CSS-7', 'CSS-8' ];

gulp.task('CSS-1', function() {
    return gulp.src( '1/style.less' )
        .pipe( less())
        .pipe( groupMedia())
        .pipe( autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe( cleanCSS())
        .pipe( rename({ suffix: '.min' }))
        .pipe( gulp.dest( '1/out/' ))
        .pipe( notify('CSS-1 Success!'));
});

gulp.task('CSS-2', function() {
    return gulp.src( '2/style.less' )
        .pipe( less())
        .pipe( groupMedia())
        .pipe( autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe( cleanCSS())
        .pipe( rename({ suffix: '.min' }))
        .pipe( gulp.dest( '2/out/' ))
        .pipe( notify('CSS-2 Success!'));
})

;gulp.task('CSS-3', function() {
    return gulp.src( '3/style.less' )
        .pipe( less())
        .pipe( groupMedia())
        .pipe( autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe( cleanCSS())
        .pipe( rename({ suffix: '.min' }))
        .pipe( gulp.dest( '3/out/' ))
        .pipe( notify('CSS-3 Success!'));
})

;gulp.task('CSS-4', function() {
    return gulp.src( '4/style.less' )
        .pipe( less())
        .pipe( groupMedia())
        .pipe( autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe( cleanCSS())
        .pipe( rename({ suffix: '.min' }))
        .pipe( gulp.dest( '4/out/' ))
        .pipe( notify('CSS-4 Success!'));
});

gulp.task('CSS-5', function() {
    return gulp.src( '5/style.less' )
        .pipe( less())
        .pipe( groupMedia())
        .pipe( autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe( cleanCSS())
        .pipe( rename({ suffix: '.min' }))
        .pipe( gulp.dest( '5/out/' ))
        .pipe( notify('CSS-5 Success!'));
});

gulp.task('CSS-6', function() {
    return gulp.src( '6/style.less' )
        .pipe( less())
        .pipe( groupMedia())
        .pipe( autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe( cleanCSS())
        .pipe( rename({ suffix: '.min' }))
        .pipe( gulp.dest( '6/out/' ))
        .pipe( notify('CSS-6 Success!'));
});


gulp.task('CSS-7', function() {
    return gulp.src( '7/style.less' )
        .pipe( less())
        .pipe( groupMedia())
        .pipe( autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe( cleanCSS())
        .pipe( rename({ suffix: '.min' }))
        .pipe( gulp.dest( '7/out/' ))
        .pipe( notify('CSS-7 Success!'));
});


gulp.task('CSS-8', function() {
    return gulp.src( '8/style.less' )
        .pipe( less())
        .pipe( groupMedia())
        .pipe( autoprefixer({browsers: ['last 5 versions', '> 2%']}))
        .pipe( cleanCSS())
        .pipe( rename({ suffix: '.min' }))
        .pipe( gulp.dest( '8/out/' ))
        .pipe( notify('CSS-8 Success!'));
});



var HTMLtasks = [ 'jade-1', 'jade-2', 'jade-3', 'jade-4', 'jade-5', 'jade-6', 'jade-7', 'jade-8' ];

gulp.task('jade-1', function() {
    return gulp.src( '1/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '1/out/' ))
        .pipe( notify('JADE-1 Success!'));
});

gulp.task('jade-2', function() {
    return gulp.src( '2/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '2/out/' ))
        .pipe( notify('JADE-2 Success!'));
});

gulp.task('jade-3', function() {
    return gulp.src( '3/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '3/out/' ))
        .pipe( notify('JADE-3 Success!'));
});

gulp.task('jade-4', function() {
    return gulp.src( '4/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '4/out/' ))
        .pipe( notify('JADE-4 Success!'));
});

gulp.task('jade-5', function() {
    return gulp.src( '5/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '5/out/' ))
        .pipe( notify('JADE-5 Success!'));
});

gulp.task('jade-6', function() {
    return gulp.src( '6/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '6/out/' ))
        .pipe( notify('JADE-6 Success!'));
});

gulp.task('jade-7', function() {
    return gulp.src( '7/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '7/out/' ))
        .pipe( notify('JADE-7 Success!'));
});

gulp.task('jade-8', function() {
    return gulp.src( '8/index.jade' )
        .pipe( jade())
        .pipe( gulp.dest( '8/out/' ))
        .pipe( notify('JADE-8 Success!'));
});






gulp.task( 'Styles', StyleTasks );
gulp.task( 'JADE', HTMLtasks );



var all = [ 'CSS-1', 'CSS-2', 'CSS-3', 'CSS-4', 'CSS-5', 'CSS-6', 'CSS-7', 'CSS-8', 'jade-1', 'jade-2', 'jade-3', 'jade-4', 'jade-5', 'jade-6', 'jade-7', 'jade-8' ];

gulp.task( 'default', all );






gulp.task('smartGrid', function() {
    var options = {
        offset: "0",
        columns: "10",
        container: {
            maxWidth: "850px",
            fields: "0"
        },
        breakPoints: {
            full: {
                width: '850px'
            },
            lg: {
                width: '740px'
            },
            md: {
                width: '680px'
            },
            sm: {
                width: '570px'
            },
            xsm: {
                width: '490px'
            },
            xs: {
                width: '420'
            },
            xxs: {
                width: '380px'
            },
            tiny: {
                width: '330px'
            }
        }
    };
    smartGrid( './', options);
});



