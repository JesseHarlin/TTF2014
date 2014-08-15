// Gulpfile.js
var gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname;
var LIVERELOAD_PORT = 35729;


gulp.task('develop', function () {
  nodemon({
    script: 'presentation.js',
    ext: 'html js',
    ignore: ['presentation.md']
  })
    .on('change')
    .on('restart', function () {
      console.log('restarted!')
    })
})


var lr;
function startLivereload() {
 
  lr = require('tiny-lr')();
  lr.listen(35729);
}