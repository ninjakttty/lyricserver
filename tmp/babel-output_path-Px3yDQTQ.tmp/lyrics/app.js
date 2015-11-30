define('lyrics/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'lyrics/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _lyricsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _lyricsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _lyricsConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _lyricsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});