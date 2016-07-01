"use strict";

var gulp=require('gulp');
var connect=require('gulp-connect');
var del=require('del');
var gutil=require('gulp-util');
var inject=require('gulp-inject');
var swig=require('gulp-swig');
var concat=require('gulp-concat');
var source=require('vinyl-source-stream');
var sourcemaps=require('gulp-sourcemaps');
var buffer=require('vinyl-buffer');
var uglify=require('gulp-uglify');
var webpack=require('webpack');
var series=require('stream-series');
//var tsProj=ts.createProject('tsconfig.json');//load tsconfig for tsc compiler
var config=require('./gulpfile.config')();
var webpackConfig=require('./webpack.config');

gulp.task('connect',function () {
    connect.server({
        root:[config.paths.outName],
        port:config.port,
        base:config.devBaseUrl,
        livereload:true
    });
});

gulp.task('clean',function() {
    return del([config.paths.out]);
});


//need config out put path
gulp.task('ts',function (callback) {
 	webpack(webpackConfig, function(err, stats) {
		if(err) throw new gutil.PluginError('ts', err);
		callback();
	});
});

gulp.task('css',function () {
    return gulp.src(config.paths.css)
          .pipe(concat('bundle.css'))
          .pipe(gulp.dest(config.paths.outCSS));
});

gulp.task('cssLib',function () {
    return gulp.src(config.paths.cssLib)
          .pipe(concat('bundle.lib.css'))
          .pipe(gulp.dest(config.paths.outCSS));
});

gulp.task('jsLib',function () {
    return gulp.src(config.paths.jsLib)
               .pipe(gulp.dest(config.paths.outLib));
});

gulp.task('index',['jsLib','ts','css','cssLib'],function () {
   var swigData={
       title:config.title
   };
   //react should be loaded firstly
   var libSource=gulp.src([config.paths.outLib+'/react.js',
                           config.paths.outLib+'/*.js'],{read:false});
   var appSource=gulp.src([config.paths.outScript+'/**/*.js'],{read:false});
   var cssSource=gulp.src([config.paths.outCSS+'/**/*.css'],{read:false});
   
   
   return gulp.src(config.paths.index)
        .pipe(swig({data:swigData}))
        .pipe(inject(series(libSource,appSource,cssSource),{ignorePath:config.paths.outName}))
        .pipe(gulp.dest(config.paths.out))
        .pipe(connect.reload());
});

gulp.task('watch',function () {
    gulp.watch(config.paths.ts,['ts']);
    gulp.watch(config.paths.css,['css']);
    gulp.watch(config.paths.index,['index']);
});

gulp.task('default',['clean'],function(){
    gulp.start('index','watch','connect');
});