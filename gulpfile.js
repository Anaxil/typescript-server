eval(
    require("typescript")
        .transpile(
            require("fs").readFileSync("./gulpclass.ts").toString()
        )
)

/*
var gulp = require("gulp"),
    path = require("path"),
    ts = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps");

gulp.task("build:server", function() {
    var tsProject = ts.createProject(
        path.resolve("./server/tsconfig.json")
    );
    var tsResult = gulp.src(["./server/ ** /*.ts"])
        .pipe(sourcemaps.init())
        .pipe(tsProject());

        return tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(
                path.resolve("./dist/server")
            ));
});

gulp.task("build", ["build:server"]);

gulp.task("default", ["build"]);
*/