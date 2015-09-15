import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service('shopping-cart'),

  model: function() {
    return this.store.findAll('menu-item');
  },

  actions: {
    addToOrder: function(item) {
      console.log('added');
      this.get('cart').addItem(item);
    },

    save: function(orderItem, data) {
      orderItem.setProperties(data);
      orderItem.save().then(() => {
        this.transitionTo('order-now');
      });
    }
  },

});
