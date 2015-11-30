import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('artists');
  this.route('lyrics');
  this.route('random');
  // this.route('random', {path: '/'});
});

export default Router;
