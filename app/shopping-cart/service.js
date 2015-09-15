import Ember from 'ember';

export default Ember.Service.extend({
  orderItems: [],

  addItem: function(item) {
    this.get('orderItems').pushObject(item);
  }
});
