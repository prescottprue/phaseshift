module.exports = function(grunt) {
    var rootFolder = './app';
    grunt.registerTask('watch', ['watch']);
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      //Trying for storing variables else where,
      connect: {
        server: {
          options: {
            port: 8000,
            //keepalive: true, keeping grunt running
            //livereload:true,
            base: rootFolder + '/',
            open: {
                target: 'http://localhost:8000',
                appName: 'Google Chrome',
            }
          }
        }
      },
      watch: {
        html: {
          files: [rootFolder + 'index.html'],
          options: {
              livereload: true
          }
        }
      } 
    });

    //Plugin for "watch"
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Connect plugin
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['connect', 'watch']);

};
