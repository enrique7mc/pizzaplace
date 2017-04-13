(function (window) {
  'use strict';
  var App = window.App || {};

  // Explain what happens during object construction
  // and the new operator
  function Store(storeId, db) {
    this.storeId = storeId;
    this.db = db; // composition
  }

  Store.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.email);
    this.db.add(order.email, order);
  };

  Store.prototype.deliverOrder = function (email) {
    console.log('Delivering order for ' + email);
    this.db.remove(email);
  };

  Store.prototype.printOrders = function () {
    var customerEmails = Object.keys(this.db.getAll());

    console.log('Store #' + this.storeId + ' has pending orders:');

    /*var self = this;
    customerEmails.forEach(function (email) {
      console.log(self.db.get(email));
    });*/

    customerEmails.forEach(function (email) {
      console.log(this.db.get(email));
    }.bind(this));
  };

  App.Store = Store;
  window.App = App;
}(window));
