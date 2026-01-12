'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat');

function startLess() {
    return gulp.src('./src/styles/*.less')
        .pipe(less().on('error', function(err) { console.error(err); }))
        .pipe(concatCss("style.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

function startWatch() {
    gulp.watch('./src/styles/*.less', startLess);
}

exports.less = startLess;
exports.watch = startWatch;
exports.default = gulp.series(startLess, startWatch);

//Вводим на другом компе команду npm install и затем gulp для сборки и отслеживания