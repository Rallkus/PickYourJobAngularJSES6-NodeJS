var gulp          = require('gulp');
var notify        = require('gulp-notify');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync').create();
var rename        = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify        = require('gulp-uglify');
var merge         = require('merge-stream');

// Where our files are located
var frontendFromBackendPath = "../frontend/";
var jsFiles   = frontendFromBackendPath+"src/js/**/*.js";
var viewFiles = frontendFromBackendPath+"src/js/**/*.html";
var cssFiles = frontendFromBackendPath+"src/assets/css/**/*.css";

var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};


gulp.task('browserify', ['views'], function() {
  return browserify(frontendFromBackendPath+'src/js/app.js')
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./build/'));
});

gulp.task('html', function() {
  return gulp.src("public/index.html")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});
gulp.task('css', function() {
  return gulp.src(frontendFromBackendPath+"src/assets/css/*.css")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/css'));
});
gulp.task('js', function() {
  return gulp.src(frontendFromBackendPath+"src/assets/js/*.js")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/jstemplate'));
});
gulp.task('img', function() {
  return gulp.src(frontendFromBackendPath+"src/assets/images/*.*")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/images'));
});
gulp.task('fonts', function() {
  return gulp.src(frontendFromBackendPath+"src/assets/fonts/*.*")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/fonts'));
});

gulp.task('views', function() {
  return gulp.src(viewFiles)
      .pipe(templateCache({
        standalone: true
      }))
      .on('error', interceptErrors)
      .pipe(rename("app.templates.js"))
      .pipe(gulp.dest(frontendFromBackendPath+'./src/js/config/'));
});

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['html', 'browserify'], function() {
  var html = gulp.src("build/index.html")
                 .pipe(gulp.dest('./dist/'));

  var js = gulp.src("build/main.js")
               .pipe(uglify())
               .pipe(gulp.dest('./dist/'));

  return merge(html,js);
});

gulp.task('default', ['html','css','fonts','js','img', 'browserify'], function() {

  browserSync.init(['./build/**/**.**'], {
    server: "./build",
    port: 4000,
    notify: false,
    ui: {
      port: 4001
    }
  });

  gulp.watch("public/index.html", ['html']);
  gulp.watch(viewFiles, ['views']);
  gulp.watch(cssFiles, ['css']);
  gulp.watch(jsFiles, ['browserify']);
});
