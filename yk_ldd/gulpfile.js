var gulp = require('gulp');
var less = require('gulp-less');
var server = require('gulp-webserver');
var data = require('./src/data/data.json');

// 编译less
gulp.task('less', function() {
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css'))
});

// 监听
gulp.task('watch', function() {
    gulp.watch('./src/less/*.less', ['less']);
});

// 启服务
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 2333,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                if (req.url === '/Tab1') {
                    res.end(JSON.stringify(data));
                }
                if (req.url === '/item') {
                    res.end(JSON.stringify(data));
                }
                next();
            }
        }));
});

// 默认任务
gulp.task('default', ['server', 'less', 'watch'], function() {
    console.log('执行默认任务');
});