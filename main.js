(function (window) {
  'use strict';

  var App = window.App;
  var DataStore = App.DataStore;

  var dataStore = new DataStore();
  dataStore.add('valor1', 'esta es una cadena');
  dataStore.add('valor2', 10);
  dataStore.add('abc', 'javascript');

  console.log(dataStore.get('valor1'));
  console.log(dataStore.get('valor2'));
  console.log(dataStore.get('abc'));
  console.log(dataStore.getAll());
}(window));
