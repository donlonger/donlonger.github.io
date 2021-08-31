const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const { src, series, parallel, dest, watch } = require ('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

  function sassTask() {
    return src('*.scss')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./'));
}


function watchTask() {
  watch(['*.scss'], {interval: 1000}, parallel(sassTask));
}

exports.default = series(parallel(sassTask), watchTask);
  



  