({
	baseUrl: ".",
	mainConfigFile: "main.js",
	out: "bundle.js",
	name: "main",
	optimize: "uglify2",
	paths: {
		jquery: "empty:",
		foundation: "bower_components/foundation/js/foundation"
	},
	excludeShallow: ['jquery'],
	generateSourceMaps: true,
	useSourceUrl: true,
	preserveLicenseComments: false,
    wrapShim: true
})
