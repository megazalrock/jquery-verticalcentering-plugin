'use strict';
module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		jqueryjson:{
			name:'verticalcentering',
			dependencies: {
				jquery:'<%= pkg.dependencies.jquery %>'
			},
			files:['build/<%= pkg.name %>.js','build/<%= pkg.name %>.min.js'],
			homepage: 'https://github.com/megazalrock/<%= pkg.name %>/',
			download: 'https://github.com/megazalrock/<%= pkg.name %>/archive/master.zip',
			docs: 'https://github.com/megazalrock/<%= pkg.name %>/blob/master/README.md',
			bugs: 'https://github.com/megazalrock/<%= pkg.name %>/issues'
		},
		jshint:{
			options:{
					node:true
			},
			files:{
				src:[
					'Gruntfile.js',
					'src/core.js'
				]
			}
		},
		concat:{
			options:{
				stripBanners: true,
				banner:'/*! <%= pkg.title %> <%= grunt.template.today("yyyy-mm-dd") %>\n *  Vertion : <%= pkg.version %>\n *  Dependencies : jQuery <%= pkg.dependencies.jquery %>\n *  Author : <%= pkg.author %>\n *  License : <%= pkg.license %>*/\n'
			},
			dist:{
				src:[
					'src/core.js'
				],
				dest:'build/<%= pkg.name %>.js'
			}
		},
		uglify:{
			options:{
				banner:'/*! <%= pkg.title %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				src:'build/<%= pkg.name %>.js',
				dest:'build/<%= pkg.name %>.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['jshint','concat','uglify']);
};
