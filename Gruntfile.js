module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      app: {
        src: 'src/js/tourofarae.js',
        dest: 'build/js/tourofarae.min.js'
      },
      bootstrap: {
        src: './bower_components/bootstrap/js/scrollspy.js',
        dest: 'tmp/bower_components/bootstrap/js/scrollspy.js'
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      vendor: {
        src: [
          './bower_components/skrollr/dist/skrollr.min.js',
          'tmp/bower_components/bootstrap/js/scrollspy.js'
        ],
        dest: 'build/js/vendor.min.js',
      }
    },
    less: {
      development: {
        options: {
          compress: true,  //minifying the result
        },
        files: {
          "build/css/styles.css": "src/css/styles.less"
        }
      }
    },
    copy: {
      main: {
        src: 'src/index.html',
        dest: 'build/index.html',
      },
      images: {
        expand: true,
        cwd: 'src/img/',
        src: '**/*',
        dest: 'build/img/',
      }
    },
    watch: {
      less: {
        files: ['src/css/*.less'],
        tasks: ['less']
      },
      copy: {
        files: ['src/index.html'],
        tasks: ['copy']
      },
      js: {
        files: ['src/js/tourofarae.js'],
        tasks: ['concat', 'uglify']
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['uglify', 'concat', 'less', 'copy']);

};
