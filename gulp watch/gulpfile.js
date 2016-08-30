var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require("./webpack.config.js");
var rename = require('gulp-rename');	//为了不每次都生成文件 所以使用重命名
// var named = require('vinyl-named');	//不改变之前的文件名以及结构

gulp.task('default',function(){
	return gulp.src('src/js/*.js')
	 	// .pipe(named())	//不改变之前的文件名以及结构
	    .pipe(webpack(webpackConfig))
	    .pipe(rename('index.js'))	//为了不每次都生成文件 所以使用重命名
	    .pipe(gulp.dest('dist/js'));
})
