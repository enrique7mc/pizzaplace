(function (window) {
  'use strict';

  var App = window.App;
  var Order = App.Order;
  var Store = App.Store;
  var DataStore = App.DataStore;

  var dataStore = new DataStore();
  var myStore = new Store('ncc-1701', new DataStore());
  window.myStore = myStore;

  var order = new Order('enrique@devcode.com', 'large', 'cheese');
  myStore.createOrder(order);
  console.log(myStore);
}(window));
