import Ember from 'ember';

export default Ember.Service.extend({
  orderItems: [],

  addItem: function(item) {
    this.get('orderItems').pushObject(item);
  },

  getOrder: function() {
    return this.get('orderItems').map((orderItem) => {
      return orderItem.toJSON();
    });
  },
  prices: Ember.computed.mapBy('orderItems', 'price'),
  subTotal: Ember.computed.sum('prices'),

});
