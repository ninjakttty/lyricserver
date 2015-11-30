import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions:{
    changeFavorite: function(model) {
      model.toggleProperty('favorite');
      model.save();
    	},
  },
});
