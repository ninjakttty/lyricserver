import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  favorite: DS.attr('boolean'),
  lyrics: DS.hasMany('lyric'),
});
