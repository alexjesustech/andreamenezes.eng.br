const { src, dest, watch, parallel, series } = require('gulp');
const minHtml = require('gulp-htmlmin');
const minJs = require('gulp-uglify');
const minCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const clean  = require('gulp-clean');

const dist = {
    folder: './build',
    css: './build/css',
    images: './build/images',
    js: './build/js',
    lib: './build/lib',
    font: './build/fonts'
};

function fonts(cb) {
    src('src/fonts/**')
        .pipe(dest(dist.font));
    cb();
}

function images(cb) {
    src('src/images/**')
        .pipe(dest(dist.images));
    cb();
}

function minifyHtml(cb) {
    src('src/*.html')
        .pipe(minHtml({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(dest(dist.folder));
    cb();
}

function minifyJs(cb) {
    src('src/js/*.js')
        // .pipe(concat("script.js"))
        .pipe(minJs())
        .pipe(dest(dist.js));
    cb();
}

function minifyCss(cb) {
    src('src/css/*.css')
        //.pipe(concat("styles.css"))
        .pipe(minCss())
        .pipe(dest(dist.css));
    cb();
}

function clear(cb) {
    src(dist.folder)
        .pipe(clean({force: true}));
    cb();
}

function build(cb) {
    parallel();
    cb();
}

function watchModifiedFiles() {
    watch('src/**/*.html', minifyHtml);
    watch('src/**/*.js', minifyJs);
    watch('src/**/*.css', minifyCss);
}

exports.minifyHtml = minifyHtml;
exports.compressJs = minifyJs;
exports.minifyCss = minifyCss;
exports.fonts = fonts;
exports.images = images;
exports.clear = clear;
exports.build = build;
exports.watchModifiedFiles = watchModifiedFiles;
exports.default = series(minifyHtml, minifyJs, minifyCss, fonts, images);

// sudo rsync -avz ./build andreamenezes@ftp.web277.uni5.net:/home/andreamenezes/www
//scp -r ./build/ andreamenezes@ftp.web277.uni5.net:/home/andreamenezes/www/