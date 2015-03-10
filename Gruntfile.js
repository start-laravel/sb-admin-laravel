module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

    // Task configuration
    concat: {
      options: {
        separator: ' ',
      },
      js_frontend: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './bower_components/Chart.js/Chart.js',               
          './bower_components/metisMenu/dist/metisMenu.js',     
          './app/assets/scripts/sb-admin-2.js',
          './app/assets/scripts/frontend.js'
          
        ],
        dest: './public/assets/scripts/frontend.js',
      },
      js_backend: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js'
        ],
        dest: './public/assets/scripts/backend.js',
      },
      styles: {
        src: [
          './bower_components/bootstrap/dist/css/bootstrap.css',
          './bower_components/font-awesome/css/font-awesome.css',
          './app/assets/css/timeline.css',
          './app/assets/css/sb-admin-2.css'
          
                   
        ],
        dest: './public/assets/stylesheets/styles.css',
      },
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      frontend: {
        files: {
          './public/assets/scripts/frontend.js': './public/assets/scripts/frontend.js',
        }
      },
      backend: {
        files: {
          './public/assets/scripts/backend.js': './public/assets/scripts/backend.js',
        }
      },
      // styles: {
      //   files: {
      //     './public/assets/stylesheets/styles.css': './public/assets/stylesheets/styles.css',
      //   }
      // },
    },
    phpunit: {
        classes: {
        },
        options: {
        }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          // {expand: true, src: ['bower_components/eonasdan-bootstrap-datetimepicker/build/js/locales/*'], dest: 'public/assets/scripts/'},

          // includes files within path and its sub-directories
          // {expand: true, src: ['bower_components/**'], dest: 'dest/'},

          // makes all src relative to cwd
          // {expand: true, cwd: 'bower_components/', src: ['**'], dest: 'dest/'},

          // flattens results to a single level
         
          // {expand: true, flatten: true, src: ['bower_components/font-awesome/fonts/*'], dest: 'public/assets/fonts/'},
          {expand: true, flatten: true, src: ['bower_components/font-awesome/fonts/*'], dest: 'public/assets/fonts/'},
          {expand: true, flatten: true, src: ['bower_components/bootstrap/fonts/*'], dest: 'public/assets/fonts/'}
        ],
      },
    },
    watch: {
        js_frontend: {
          files: [
            //watched files
          './app/assets/scripts/frontend.js',
          './app/assets/scripts/sb-admin-2.js'
          ],   
          tasks: ['concat:js_frontend','uglify:frontend'],     //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        js_backend: {
          files: [
            //watched files
            './bower_components/jquery/dist/jquery.js',
            './app/assets/vendor/bootstrap/dist/js/bootstrap.js',
            './app/assets/scripts/backend.js'
          ],   
          tasks: ['concat:js_backend','uglify:backend'],     //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        styles: {
          files: [
            //watched files

          
          './bower_components/bootstrap/dist/css/bootstrap.css',
          './bower_components/font-awesome/css/font-awesome.css',
          './bower_components/metisMenu/css/metisMenu.css',
          './app/assets/css/sb-admin-2.css',
          './app/assets/css/timeline.css'
            ],   
          tasks: ['concat:styles'],     //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        less: {
          files: [
            // './app/assets/vendor/bootstrap/less/*.less',
            // './app/assets/stylesheets/*.less'
          ],  //watched files
          tasks: ['less'],                          //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        tests: {
          files: ['app/controllers/*.php','app/models/*.php'],  //the task will run only when you save files in this location
          tasks: ['phpunit']
        }
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-phpunit');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Task definition
  grunt.registerTask('default', ['watch']);

};