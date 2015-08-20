import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  return this.store.createRecord('menu-item');
},

  actions: {
    save: function(menuItem, data) {
      menuItem.setProperties(data);
      menuItem.save().then(() => {
        this.transitionTo('employee-options.menu-options.show');
      });
    }
  }
});
