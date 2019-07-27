var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nestedCSS = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');


gulp.task('styles', () => {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nestedCSS, autoprefixer]))
    .on('error', function(e) {
        console.log(e.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});

