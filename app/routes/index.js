import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  	//fetch one random lyric from the server that the user has favorited
    return Ember.RSVP.hash({
      lyrics: this.store.query('lyric', { filter: { favorite: true, limit: 1 } }),
      artists: this.store.findAll('artist'),
    });
  },
});
