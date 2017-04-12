(function (window) {
  'use strict';

  var App = window.App;
  var PizzaOrder = App.PizzaOrder;
  var Store = App.Store;
  var DataStore = App.DataStore;

  var dataStore = new DataStore();
  var myStore = new Store('ncc-1701', new DataStore());
  window.myStore = myStore;

  var order = new PizzaOrder('enrique@devcode.com', 'large', 'cheese');
  order.displayOrder(); // inherited method
  myStore.createOrder(order);
  myStore.printOrders();

  myStore.deliverOrder('enrique@devcode.com');
  myStore.printOrders();
}(window));
