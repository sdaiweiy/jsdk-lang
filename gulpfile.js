let gulp = require("gulp"),
    typedoc = require("gulp-typedoc"),
    rollup = require('rollup'),
    ts = require('gulp-typescript'),
    uglify = require("gulp-uglify"),
    rename = require('gulp-rename'),
    header = require("gulp-header"),
    runSequence = require("run-sequence"),
    rollupTypescript = require('rollup-plugin-typescript2');

gulp.task("dist-source-es5", function () {
    return rollup.rollup({
        input: './src/index.ts',
        plugins: [
            rollupTypescript({
                tsconfig: "./tsconfig.json",
                useTsconfigDeclarationDir: false,
                tsconfigOverride: {compilerOptions: {target: "es5", declaration: false}},
            })
        ]
    }).then(bundle => {
        return bundle.write({
            file: './dist/jsdk.lang.es5.js',
            format: 'iife',
            name: 'Jsdk.Lang'
        });
    });
});

//打包es3版本的代码,单文件供浏览器直接访问
gulp.task("dist-source-es3", function () {
    return rollup.rollup({
        input: './src/index.ts',
        plugins: [
            rollupTypescript({
                tsconfig: "./tsconfig.json",
                useTsconfigDeclarationDir: false,
                tsconfigOverride: {compilerOptions: {target: "es3", declaration: false}},
            })
        ]
    }).then(bundle => {
        return bundle.write({
            file: './dist/jsdk.lang.es3.js',
            format: 'iife',
            name: 'Jsdk.Lang'
        });
    });
});

gulp.task("compress-es5", function () {
    return gulp.src("./dist/jsdk.lang.es5.js")
        .pipe(uglify({}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("./dist"))
});

gulp.task("compress-es3", function () {
    return gulp.src("./dist/jsdk.lang.es3.js")
        .pipe(uglify({ie8: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("./dist"))
});

gulp.task("header", function () {
    let pkg = require(__dirname + "/package.json");

    let banner = ["/**",
        " * <%= pkg.name %> v.<%= pkg.version %> - <%= pkg.description %>",
        " * Copyright (c) 2018 <%= pkg.author %>",
        " * <%= pkg.license %>",
        " * <%= pkg.homepage %>",
        " */",
        ""].join("\n");

    return gulp.src(["./dist/jsdk.lang.es3.js", "./dist/jsdk.lang.es3.min.js", "./dist/jsdk.lang.es5.js", "./dist/jsdk.lang.es5.min.js"])
        .pipe(header(banner, {pkg: pkg}))
        .pipe(gulp.dest("./dist"));
});

gulp.task("document", function () {
    return gulp.src(["./src/**/*.ts"])
        .pipe(typedoc({
            module: 'commonjs',
            target: 'es6',
            out: "./documentation",
            name: "jsdk-lang-api",
            ignoreCompilerErrors: true
        }));
});

//打包es6版本的代码
gulp.task("build-cjs", function () {
    return rollup.rollup({
        input: './src/index.ts',
        plugins: [
            rollupTypescript({
                tsconfig: "./tsconfig.json",
                useTsconfigDeclarationDir: true
            })
        ]
    }).then(bundle => {
        return bundle.write({
            file: './dist/jsdk.lang.cjs.js',
            format: 'cjs'
        });
    });
});

gulp.task('build-es5', function (cb) {
    runSequence(
        "dist-source-es5",
        "compress-es5",
        "header",
        cb);
});

gulp.task('build-es3', function (cb) {
    runSequence(
        "dist-source-es3",
        "compress-es3",
        "header",
        cb);
});
