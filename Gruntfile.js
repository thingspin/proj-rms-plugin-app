
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
  
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.initConfig({
      project: {
        dev: 'src',
        dist: 'dist',
      },
      clean: ['dist'],
      sass: {
        options: {
          sourceMap: true
        },
        dist: {
          files: {
            "dist/css/rms-plugins-app.dark.css": "src/sass/rms-plugins-app.dark.scss",
            "dist/css/rms-plugins-app.light.css": "src/sass/rms-plugins-app.light.scss",
            "dist/css/rms-plugins-app.office.css": "src/sass/rms-plugins-app.office.scss",
          }
        }
      },
      webpack: {
        options: {
          // stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
          stats: {
            colors: true,
            modules: true,
            reasons: false
          },
          progress: true,
        },
        prod: require('./build/webpack.prod'),
        dev: Object.assign({ watch: true }, require('./build/webpack.dev'))
      },
      
      watch: {
        styles: {
          files: ['<%= project.dev %>/sass/**/*.scss'],
          tasks: ['sass'],
          options: {
            livereload: true
          }
        },
        scripts: {
          files: ['Gruntfile.js',
            '<%= project.dev %>/**/*.js',
            '<%= project.dev %>/**/*.ts',
            '<%= project.dev %>/**/*.html',
          ],
          tasks: ['webpack:prod'], // !important
          options: {
            livereload: true,
            reload: true,
            debounceDelay: 250,
          }
        },
      }
    });
  
    grunt.registerTask('default', [
      'clean',
      'sass',
      'webpack:prod',
    ]);
  };
  