define('lyrics/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'lyrics/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _lyricsConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_lyricsConfigEnvironment['default'].APP.name, _lyricsConfigEnvironment['default'].APP.version)
  };
});