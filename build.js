({
	baseUrl: ".",

    //loads client side config for default paths and shims
	mainConfigFile: "main.js",
	out: "bundle.js",
	name: "main",
	optimize: "uglify2"

    //paths for r.js
	paths: {
		jquery: "empty:",
		foundation: "bower_components/foundation/js/foundation"
	},

    //jquery not in bundle, loaded from cdn @ runtime
    wrapShim: true,
	excludeShallow: ['jquery']

    //generate sourcemaps
	generateSourceMaps: true,
	useSourceUrl: true,
	preserveLicenseComments: false
})
