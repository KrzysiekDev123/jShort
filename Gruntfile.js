module.exports = grunt => {
    grunt.initConfig({
        uglify: {
            all: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'build/jshort.min.map'
                },
                src: 'src/*.js',
                dest: 'build/jshort.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.registerTask('build', 'uglify:all')
}
