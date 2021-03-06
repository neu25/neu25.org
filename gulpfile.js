const fs = require('fs');
const rimraf = require('rimraf');
const gulp = require('gulp');
const rev = require('gulp-rev');
const revRewrite = require('gulp-rev-rewrite');
const gulpNunjucks = require('gulp-nunjucks');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();

function clean(cb) {
  rimraf('./dist', cb);
}

function assets() {
  return gulp.src('./public/**/*').pipe(gulp.dest('./dist'));
}

async function html() {
  const siteData = JSON.parse(
    fs.readFileSync('./src/data/site.json', {
      encoding: 'utf-8',
    }),
  );

  return gulp
    .src('./src/*.njk')
    .pipe(
      gulpNunjucks.compile({
        site: siteData,
      }),
    )
    .pipe(gulp.dest('./dist'));
}

function css() {
  return gulp
    .src('./src/css/*.css')
    .pipe(postcss())
    .pipe(rev())
    .pipe(gulp.dest('./dist/css'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist'));
}

function hash() {
  const manifest = fs.readFileSync('./dist/rev-manifest.json');

  return gulp
    .src('./dist/*.html')
    .pipe(revRewrite({ manifest }))
    .pipe(gulp.dest('./dist'));
}

function postBuild(cb) {
  rimraf('./dist/rev-manifest.json', cb);
}

const build = gulp.series([clean, assets, html, css, hash]);

async function watch() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    injectChanges: false,
  });

  gulp.watch('./src/**/*.njk', gulp.series([html, css, hash]));
  gulp.watch('./src/**/*.css', gulp.series([html, css, hash]));
  gulp.watch('./public/**/*', gulp.series(assets));

  gulp.watch('./src/**/**.*').on('change', browserSync.reload);
}

gulp.task('build', gulp.series([build, postBuild]));
gulp.task('watch', gulp.series([build, watch]));
