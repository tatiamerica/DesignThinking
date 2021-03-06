const { watch } = require("gulp");

let porgect_folder = "dist";
let sourse_folder = "src";

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: sourse_folder + "/",
        css: sourse_folder + "/scss/style.scss",
        js: sourse_folder + "/js/script.js",
        img: sourse_folder + "/img/**/*.{jpg,png,svg,gir,ico,webp}",
        fonts: sourse_folder + "/fonts/*.ttf",
    },
    watch: {
        html: sourse_folder + "/**/*.html",
        css: sourse_folder + "/scss//**/*.scss",
        js: sourse_folder + "/js/**/*.js",
        img: sourse_folder + "/img/**/*.{jpg,png,svg,gir,ico,webp}",
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
    gulp = reguire('guip'),
    browsersync = require("browser-sync").create();

function browserSync(params) {
    browsersync.init({
        srever: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}


let watch = gulp.parallel(browserSync);

exports.watch = watch;
exports.default = watch;

const { src, dest } = reguire('gulp');

const scss = require('gulp-sass');

function styles() {
    return src('Gulpfiles/app/SCSS/style.scss')
        .pipe(scss())
        .pipe(dest('Gulpfiles/app/css'))
}

exports.styles = styles;