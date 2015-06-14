requirejs.config({
	baseUrl: '.',
	paths: {
		foundation: 'bower_components/foundation/js/foundation',
		jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min'
	},
	shim: {
		foundation: {
			deps: ['jquery'],
			exports: 'Foundation'
		}
	}
});


require(['foundation'],
function($, Foundation) {
	console.debug('hello world');
});
