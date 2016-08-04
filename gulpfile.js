var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');

var src = {
  html: 'src/**/*.html',
  css: 'src/**/*.css',
  scripts: {
    all: 'src/scripts/**/*.js',
    app: 'src/scripts/app.js'
  }
};

var out = {
  file: 'app.min.js',
  folder: 'src/build'
};

gulp.task('html', function() {
  return gulp.src(src.html)
        .pipe(connect.reload());
});

gulp.task('scripts', function() {
  
  var sources = browserify({
    entries: src.scripts.app,
    debug: true
  })
  .transform(babelify.configure({
    presets: ["es2015"]
  }));

  return sources.bundle()
        .pipe(vinylSourceStream(out.file))
        .pipe(vinylBuffer())
        .pipe(sourcemaps.init({
          loadMaps: true
        }))
        // TO DO: Uglify breaks di, even inline array annotation 
        // .pipe(uglify())
        .pipe(sourcemaps.write('./', {
          includeContent: true
        }))
        .pipe(gulp.dest(out.folder))
        .pipe(connect.reload());
});

gulp.task('serve', ['build', 'watch'], function() {
  connect.server({
    port: 8080,
    livereload: true
  });
});


gulp.task('watch', function() {
  gulp.watch(src.html, ['html', 'scripts']);
  // gulp.watch(src.scripts.all, ['scripts']);
});

gulp.task('build', ['scripts']);

gulp.task('default', ['serve']);