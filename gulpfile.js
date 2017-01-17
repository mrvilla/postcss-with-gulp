var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('cssnext'),
    precss = require('precss');


gulp.task('css', function () {
  var processors = [
      autoprefixer,
      cssnext,
      precss
  ];
  
  return gulp.src('postcss/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('css'));
});

