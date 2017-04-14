class Store {
  constructor(storeId, db) {
    this.storeId = storeId;
    this.db = db;
  }

  createOrder(order) {
    console.log(`Adding order for ${order.email}`);
    this.db.add(order.email, order);
  }

  deliverOrder(customerId) {
    console.log(`Delivering order for ${customerId}`);
    this.db.remove(customerId);
  }

  printOrders() {
    const customerIdArray = Object.keys(this.db.getAll());

    console.log(`Store #${this.StoreId} has pending orders:`);
    customerIdArray.forEach((id) => {
      console.log(this.db.get(id));
    });
  }
}

export default Store;
