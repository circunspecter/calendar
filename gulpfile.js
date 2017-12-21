const gulp = require('gulp');

// Copy to docs
// ------------

gulp.task('cp:docs:lib', () => {
  return gulp.src('./dist/*.js')
    .pipe(gulp.dest('./docs/assets/js'));
});
