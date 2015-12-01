import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //fetch all lyrics
    return Ember.RSVP.hash({
      lyrics: this.store.findAll('lyric'),
      artists: this.store.findAll('artist'),
    });
  },
});
