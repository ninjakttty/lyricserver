define('lyrics/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].RESTAdapter.extend({
		host: 'http://96.126.100.101:3000'
		// host: 'http://localhost:3000',

	});
});