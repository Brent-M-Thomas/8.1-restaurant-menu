import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('employee-options', {path: '/'}, function() {
    this.route('index', {path: '/'});
    this.route('order-view');
    this.route('menu-options', function() {
      this.route('create');
      this.route('show');
      this.route('edit', {path: '/:menu_item_id'});
    });
  });
});

export default Router;
