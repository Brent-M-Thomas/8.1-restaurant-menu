import Ember from 'ember';

export default Ember.Route.extend({
cart: Ember.inject.service('shopping-cart'),

  model: function() {
    return this.store.getRecord('order');
  },


});
