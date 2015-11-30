define('lyrics/tests/helpers/start-app', ['exports', 'ember', 'lyrics/app', 'lyrics/config/environment'], function (exports, _ember, _lyricsApp, _lyricsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _lyricsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _lyricsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});