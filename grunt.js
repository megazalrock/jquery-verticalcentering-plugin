/*global module:false*/
module.exports = function(grunt){
	var jsFiles = [
		'src/core.js'
	];
	grunt.initConfig({
		//lint
		lint: {
			files : [
				'grunt.js',
				'src/core.js'
			]
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true
			},
			globals: {
				jQuery: true
			}
		},
		//watch
		watch : {
			dist : {
				files : jsFiles,
				tasks:'concat min'
			}/*,
			css : {
				files : ['path/to/style.css'],
				tasks:'concat'
			},
			less : {
				files : ['path/to/style.less'],
				tasks:'less'
			}*/
		},
		concat:  {
			dist : {
				src : jsFiles,
				dest : 'jquery-verticalcentering-plugin.js'
			}/*,
			css : {
				sec : ['path/to/style.css'],
				dest : 'path/to/style_result.css'
			}*/
		},
		min: {
			dist :{
				src : ['jquery-verticalcentering-plugin.js'],
				dest : 'jquery-verticalcentering-plugin.min.js'
			}
		}/*,
		less : {
			dist : {
				src : ['path/to/style.less'],
				dest : 'path/to/style.css'
			}
		},
		cssmin : {
			dist : {
				src : ['path/to/css.css'],
				dest : 'path/to/css.min.css'
			}
		}*/
	});
	grunt.registerTask('default', 'concat min');
};