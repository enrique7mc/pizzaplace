import DataStore from './datastore';
import Store from './store';

const myStore = new Store('ncc-1701', new DataStore());

console.log(myStore);
