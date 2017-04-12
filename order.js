(function (window) {
  'use strict';

  var App = window.App || {};

  /*
  function Order(email, size, speciality) {
    this.email = email;
    this.size = size;
    this.speciality = speciality;
  }
  */

  // Protototype inheritance approach
  function BaseOrder(email) {
    this.email = email;
  }

  // first introduce this method
  BaseOrder.prototype.displayOrder = function () {
    console.log('Order for: ' + this.email);
  };

  function PizzaOrder(email, size, speciality) {
    BaseOrder.call(this, email);
    this.size = size;
    this.speciality = speciality;
  }

  PizzaOrder.prototype = Object.create(BaseOrder.prototype);
  PizzaOrder.prototype.constructor = PizzaOrder;

  // then this one
  PizzaOrder.prototype.displayOrder = function () {
    BaseOrder.prototype.displayOrder.call(this);
    console.log('Size: ' + this.size);
  };

  App.PizzaOrder = PizzaOrder;
  window.App = App;
})(window);
