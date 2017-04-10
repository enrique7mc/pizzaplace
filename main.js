console.log('main');
var dataStore = new DataStore();
dataStore.add('valor1', 'esta es una cadena');
dataStore.add('valor2', 10);
dataStore.add('abc', 'javascript');
console.log(dataStore);

console.log(dataStore.get('valor1'));
console.log(dataStore.get('valor2'));
console.log(dataStore.get('abc'));
console.log(dataStore.getAll());

// Explain the relationship between these two properties
// console.console.log(DataStore.prototype === dataStore.__proto__);
