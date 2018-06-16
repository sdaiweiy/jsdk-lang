let gulp = require("gulp"),
    tsc = require("gulp-typescript"),
    typedoc = require("gulp-typedoc"),
    rollup = require('rollup'),
    rollupTypescript = require('rollup-plugin-typescript');


//打包ts版本的代码,按模块分离文件
gulp.task("build-source", function () {
    let tsProject = tsc.createProject('./tsconfig.json', {target: "es6"});
    return tsProject.src().pipe(tsProject()).pipe(gulp.dest("./dist"));
});

//打包es6版本的代码,单文件供浏览器直接访问
gulp.task("bundle-source-es5", function () {
    return rollup.rollup({
        input: './src/index.ts',
        plugins: [
            rollupTypescript({
                tsconfig: {
                    compilerOptions: {
                        target: "es5"
                    }
                },
                typescript: require('typescript')
            })
        ]
    }).then(bundle => {
        return bundle.write({
            file: './bundle/es5/jsdk.lang.js',
            format: 'iife',
            name: 'Jsdk.Lang',
            sourcemap: true
        });
    });
});

//打包es3版本的代码,单文件供浏览器直接访问
gulp.task("bundle-source-es3", function () {
    return rollup.rollup({
        input: './src/index.ts',
        plugins: [
            rollupTypescript({
                tsconfig: {
                    compilerOptions: {
                        target: "es3"
                    }
                },
                typescript: require('typescript')
            })
        ]
    }).then(bundle => {
        return bundle.write({
            file: './bundle/es3/jsdk.lang.js',
            format: 'iife',
            name: 'Jsdk.Lang',
            sourcemap: true
        });
    });
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