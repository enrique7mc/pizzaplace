(function (window) {
  'use strict';
  var App = window.App || {};

  function Store(storeId, db) {
    this.storeId = storeId;
    this.db = db; // composition
  }

  App.Store = Store;
  window.App = App;
})(window);
