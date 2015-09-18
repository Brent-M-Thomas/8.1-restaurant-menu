import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service('shopping-cart'),

    actions: {
    save: function() {
      var data = this.getProperties('menuItems', 'subTotal');
      this.sendAction('save', this.get('order-model'), data);

    }
  }

});
