import DS from 'ember-data';

export default DS.Model.extend({

  subTotal: DS.attr('number'),
  menuItems: DS.hasMany('menu-item', {async: true}),
});
