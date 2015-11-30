/* jshint ignore:start */

define('lyrics/config/environment', ['ember'], function(Ember) {
  var prefix = 'lyrics';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("lyrics/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"lyrics","version":"0.0.0+5c88bce0"});
}

/* jshint ignore:end */
