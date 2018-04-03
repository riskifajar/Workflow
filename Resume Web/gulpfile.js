const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require ('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('serve',['sass'], function(){
    browserSync.init({
        server: './'
    })

gulp.watch('./scss/*.scss', ['sass']);
gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve', 'sass']);