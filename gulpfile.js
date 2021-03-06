var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var header = require('gulp-header');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var cleanCSS = require('gulp-clean-css');
var pug = require('gulp-pug');
var pkg = require('./package.json');

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('build:scss', function () {
    return gulp.src('./src/css/ponyo.scss')
        .pipe(sourcemaps.init())
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(autoprefixer({
            browsers: ['since 2010'],
            cascade: false
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('compress:scss',function(){
    return gulp.src('./src/css/ponyo.scss')
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(autoprefixer({
        browsers: ['since 2010'],
        cascade: false
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename("ponyo.min.css"))
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('build:pug',function(){
    return gulp.src('./src/example/index.pug')
        .pipe(pug().on('error',function(){}))
        .pipe(gulp.dest('./dist/example/'));
})

gulp.task('connect',function() {
    connect.server({
        root: 'dist/',
        livereload: true
    });
})

gulp.task('reload:html',['build:pug'],function(){
    return gulp.src('./dist/example/**/*.html')
    .pipe(connect.reload());
})

gulp.task('reload:css',['build:scss','compress:scss'],function(){
    return gulp.src('./src/**/*.scss')
    .pipe(connect.reload());
})

gulp.task('watch',['connect'],function(){
    gulp.watch('./src/**/*.scss',['reload:css']);
    gulp.watch('./src/example/index.pug',['reload:html']);
})

gulp.task('default',['connect','watch'])