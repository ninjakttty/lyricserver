define('lyrics/models/lyric', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    text: _emberData['default'].attr('string'),
    artist: _emberData['default'].belongsTo('artist')
  });
});