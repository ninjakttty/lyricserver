define('lyrics/models/artist', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    favorite: _emberData['default'].attr('boolean'),
    lyrics: _emberData['default'].hasMany('lyric')
  });
});