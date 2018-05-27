"use strict";

let gulp = require("gulp"),
    tsc = require("gulp-typescript"),
    typedoc = require("gulp-typedoc"),
    tsProject = tsc.createProject('./tsconfig.json');

gulp.task("build-source", function () {
    return tsProject.src().pipe(tsProject()).pipe(gulp.dest("./dist"));
});

gulp.task("document", function () {
    return gulp.src(["**/*.ts"])
        .pipe(typedoc({
            out: __dirname + "/documentation",
            name: "jsdk-lang-api"
        }));
});