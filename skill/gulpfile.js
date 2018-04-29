var gulp = require('gulp');
var server = require('gulp-webserver');
var data = require('./src/data/data.json');
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            livereload: true,
            port: 2333,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/banner') {
                    res.end(JSON.stringify(data));
                }
                next();
            }
        }));
});
gulp.task('default', ['server'], function() {
    console.log('执行默认任务');
});