var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');


gulp.task('hello', function() {
  console.log('Hello Zell');
});



function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
};



gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .on('error', swallowError)
    .pipe(cssnano())
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
});