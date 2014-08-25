module.exports = function (grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    base:'./'
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: false,
                    optimization: 0
                },
                files: {
                    "css/style.css": "css/style.less"
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'css/style.css': 'css/style.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['css/style.less'],
                tasks: ['less', 'autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect', 'watch']);
};