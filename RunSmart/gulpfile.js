const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"  // папка запуска сервера src or dist
        }
    });

    gulp.watch('src/*.html').on('change', browserSync.reload);  // в уроке появилась тут
});

gulp.task('styles', function () {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
          }))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))  // папка компиляции css файла src/css or dist/css
        .pipe(browserSync.stream());
});
//компиляция scss/sass файлов
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.+(scss|sass|css)', gulp.parallel('styles'));
    // gulp.watch('src/*.html').on('change', browserSync.reload);   //в уроке его не было
    gulp.watch('src/*.html').on('change', gulp.parallel('html')); //добавил новые описание

});
// сжатие и компирование html в dist
gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
});

// копирование js файлов в dist
gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest('dist/js'));
});

//копирование fonts в dist
gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest('dist/fonts'));
});

//копирование icons в dist
gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest('dist/icons'));
});

//копирование mailer в dist
gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest('dist/mailer'));
});

//копирование img в dist
gulp.task('img', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'scripts', 'fonts', 'icons', 'mailer', 'img' ));
