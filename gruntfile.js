module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        clean: ['build/'],

        jshint: { //the task name is defined by plugin
            options: {
                jshintrc: '.jshintrc',
                ignores: ['node_modules/**']
            },
            source: { //this target name is arbitrary
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

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask(['test, clean']);
};
