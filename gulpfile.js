const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('ts', () => {
    gulp.src('./clock.ts')
        .pipe(ts({
            noImplicitAny: false,
            outFile: 'pong.js'
        }))
        .pipe(gulp.dest('./dist/'))
});