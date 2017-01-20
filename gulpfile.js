var gulp = require('gulp'),
    gutil = require('gulp-util'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('cssnext'),
    precss = require('precss'),
    cssgrace = require('cssgrace'),
    cssnano = require('cssnano');


gulp.task('css', function () {
  var processors = [
    autoprefixer,
    cssnext,
    precss,
    cssgrace
  ];
  
  return gulp.src('postcss/*.css')
    .pipe(postcss(processors))
    .on('error', gutil.log)
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('**/*.css', ['css']);
});
