var gulp = require('gulp'),
watch = require('gulp-watch'),
browerSync = require('browser-sync').create();

gulp.task('cssInject', ['styles'], () => {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browerSync.stream());
});

gulp.task('watch', () => {
    
    browerSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });

    watch('./app/index.html', () => {
        browerSync.reload();
    });
    
    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('cssInject');

    });
    
});