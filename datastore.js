function DataStore() {
  this.data = {};

  // not efficient
  // mention prototypes
  this.add = function (key, val) {
    this.data[key] = val;
  };
}
