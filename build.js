({
    preserveLicenseComments: false,
    baseUrl: ".",
    out: "bundle.js",
    name: "main",
    optimize: "uglify2",
    paths: {
        jquery: "empty:",
        foundation: "bower_components/foundation/js/foundation",
    },
    mainConfigFile: "main.js",
    generateSourceMaps: true,
    useSourceUrl: true
})

