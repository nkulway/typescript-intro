// --------------------------------------------------------- //
// Grunt is extremely popular and powerful js task runner.
// Basically grunt is a tool that you usee in conjunction with 
// node to do tasks for you automatically - repetitive in 
// nature such as ts compiler.
//
// Uses grunt file to manage automated tasks that it will be
// performing for you.  Has many plug-ins.
//
// --------------------------------------------------------- //

module.exports = function(grunt) {
  // grunt will be passed into this function when it runs
  grunt.loadNpmTasks('grunt-ts')

  // define initial config for grunt.
  // each property of this object cooresponds with a task that
  // grunt can run
  grunt.initConfig({
    // only having grunt run one task, 'ts'
    // ts will be a package of dif configs
    ts: {
      // grunt involves a pattern of nested objs inside nested objs -> alt is Gulp
        main: {
            // src is an array of ts files that it will take and turn into js files
              src:['typescript/*.ts'],
            // dest is a folder where it will send ts files after they have been turned into js files
            //  dest:'javascript/'
            // instead we will use an 'out' argument that will act like the 'out'
            // argument in the tsc command line
            out: 'javascript/main.js'
        }
    }
  });

  // register grunt task for this to run
  // 'default' is a special string which will make this task run when you call grunt
  // pass in an array with 'ts' as a definition of a typescript property
  grunt.registerTask('default',['ts'])

}

