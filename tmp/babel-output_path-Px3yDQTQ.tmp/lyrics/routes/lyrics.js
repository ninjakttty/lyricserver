define('lyrics/routes/lyrics', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return _ember['default'].RSVP.hash({
				lyrics: this.store.findAll('lyric'),
				artists: this.store.findAll('artist')
			});
		}

	});
});