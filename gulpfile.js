const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    gulp.src('./sass/styles.scss')
      .pipe(sass({
          outputStyle:'nested'
      }))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream())
  });

gulp.task('serve',['sass'], function(){
    browserSync.init({
        server:'./'
    })

    gulp.watch('./sass/styles.scss', ['sass']);
    gulp.watch('index.html').on('change', browserSync.reload);
})
