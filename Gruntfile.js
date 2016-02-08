module.exports = function(grunt) {
  var mainDesc =
    '/*!\n' +
    ' * <%= pkg.name %> - <%= pkg.description %>\n' +
    ' *\n' +
    ' * @version v<%= pkg.version %>\n' +
    ' * @link <%= pkg.homepage %>\n' +
    ' * @author Ustym Ukhman <ustym.ukhman@gmail.com>\n' +
    ' * @license <%= pkg.license.type %> License, <%= pkg.license.url %>\n' +
    ' *\n' +
    ' * Date: <%= grunt.template.today("dd-mm-yyyy h:MM:ss TT Z") %>\n' +
    ' */\n\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: '\n\n',
        banner: mainDesc
      },

      dist: {
        src: [
          'css/_dynamic.css',
          'css/specials/*.css',
          'css/star wars/*.css',
          'css/incomers & leavers/*.css',
          'css/speedy/*.css',
          'css/stairs/*.css',
          'css/jumpers/*.css',
          'css/rollers/*.css',
          'css/fallers/*.css',
          'css/turners/*.css'
        ],
        dest: '<%= pkg.filename %>.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);
};