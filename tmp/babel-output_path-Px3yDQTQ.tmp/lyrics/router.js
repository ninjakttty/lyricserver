define('lyrics/router', ['exports', 'ember', 'lyrics/config/environment'], function (exports, _ember, _lyricsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _lyricsConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('artists');
    this.route('lyrics');
  });

  exports['default'] = Router;
});