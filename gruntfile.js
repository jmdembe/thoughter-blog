module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        clean: ['build/'],

        jshint: {
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

        copy: {
          html: {
            files: [
              {
                expand: true,
                cwd: 'src/',
                src: [ 'index.html' ],
                dest: 'build/'
              }
            ]
          },
          vendorjs: {
            files: [
              {
                expand: true,
                cwd: 'node_modules/jquery/dist/',
                src: [ 'jquery.js' ],
                dest: 'build/js/'
              }//end of file list for vendorjs
            ]//files for vendorjs
          }//vendorjs
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default' ['clean', 'test', 'copy']);
};
