const gulp = require('gulp');
const svgstore = require('gulp-svgstore');


module.exports = function svgSprite() {
    return gulp.src('src/images/sprite/*.svg')
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(gulp.dest('build/img'))
};

