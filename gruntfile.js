module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        clean: ['build/'],

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['node_modules/**']
            },//end of options for jshint
            source: {
                files: {
                    src:['src/js/**/*.js']
                }//end of files for src/
            }, //end of source for jshint
            test: {
                files: {
                    src: ['test/specs/**/*.js']
                }//end of files for test/
            }//end of test information for jshnt
        },//end of jshint

        copy: {
          html: {
            files: [
              {
                expand: true,
                cwd: 'src/',
                src: [ 'index.html' ],
                dest: 'build/'
              }//end of files for copy
            ]//end of files for html copy
          },//end of html information for copy
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
        },//end of copy
      connect: {
        testing: {
          options: {
            port: 8888,
            base: '.'
          }
        }
      },//end of connect
      mocha: {
          all: {
            options: {
                urls: [
                    'http://localhost:8080/test/test.html'
                ]
            }
          }
      }
    });//end of init config

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', ['jshint','clean', 'test', 'copy']);
    grunt.registerTask('test', ['jshint', 'connect', 'mocha']);
};
