import DataStore from './datastore';
import Store from './store';
import { PizzaOrder } from './order';

const myStore = new Store('ncc-1701', new DataStore());

const order = new PizzaOrder('enrique@devcode.com', 'large', 'cheese');
myStore.createOrder(order);
myStore.printOrders();
myStore.deliverOrder('enrique@devcode.com');
myStore.printOrders();
