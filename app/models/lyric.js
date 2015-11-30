import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  song_title: DS.attr('string'),
  artist: DS.belongsTo('artist'),
});
