/*// Class inheritance approach
class BaseOrder {
  constructor(email) {
    this.email = email;
  }
}

class PizzaOrder extends BaseOrder {
  constructor(email, size, speciality) {
    super(email);
    this.size = size;
    this.speciality = speciality;
  }
}

export {
  BaseOrder,
  PizzaOrder
};*/

// Composition approach
const email = { email: '' };
const size = { size: 'medium' };
const speciality = { speciality: 'cheese' };

const BaseOrder = (params) => {
  return Object.assign({}, email, params);
};

const PizzaOrder = (params) => {
  return Object.assign({}, email, size, speciality, params);
};

export {
  BaseOrder,
  PizzaOrder
};
