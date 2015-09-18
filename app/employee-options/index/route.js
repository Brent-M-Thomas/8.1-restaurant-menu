import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('menu-item');
  },
  actions: {
    delete: function(item) {
      item.destroyRecord();
      this.transitionTo('employee-options.index');
      },
  }
});
