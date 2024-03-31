const gulp = require("gulp");

const dest = "dist/bc-ui-angular-libs/scss";

gulp.task("shared-scss", function () {
  return new Promise(function (resolve, reject) {
    gulp.src("./src/scss/**").pipe(gulp.dest(dest));
    resolve();
  });
});
