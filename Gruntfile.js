module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      main: {
        options: {
          paths: [
            "bower_components/bootstrap/less",
            "src"
          ],
          stripBanners: false,
        },
        files: {
          "dist/bootstrap.block-grid.css":[
            "bower_components/bootstrap/less/bootstrap.less",
            "src/bootstrap-block-grid.less"
          ]
        }
      },

      min: {
        options: {
          paths: [
            "bower_components/bootstrap/less",
            "src"
          ],
          stripBanners: true,
          compress: {
            cleancss: true
          }
        },
        files: {
          "dist/bootstrap.block-grid.min.css":[
            "bower_components/bootstrap/less/bootstrap.less",
            "src/bootstrap-block-grid.less"
          ]
        }
      },
    }
  });

  grunt.loadNpmTasks("assemble-less");

  grunt.registerTask('default', ['less']);
};