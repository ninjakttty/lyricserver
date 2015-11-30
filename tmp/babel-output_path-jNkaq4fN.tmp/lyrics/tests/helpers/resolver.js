define('lyrics/tests/helpers/resolver', ['exports', 'ember/resolver', 'lyrics/config/environment'], function (exports, _emberResolver, _lyricsConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _lyricsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _lyricsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});