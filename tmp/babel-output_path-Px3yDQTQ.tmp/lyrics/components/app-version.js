define('lyrics/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'lyrics/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _lyricsConfigEnvironment) {

  var name = _lyricsConfigEnvironment['default'].APP.name;
  var version = _lyricsConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});