module.exports = functions(grunt){

grunt.initConfig({

  jshint:{ 

            options: {
              jshintrc: '.jshintrc',
              ignores: ['node_modules/**']
            },

            source: {
                files: {
                    src:['src/js/**/*.js']
                }
            },

            test: {
              files: {
                src: ['test/specs/**/*.js']
              }
            }
      },



});

grunt.loadNPMTasks('grunt-contrib-jshint');





grunt.registerTask('default', ['jshint]');


}
