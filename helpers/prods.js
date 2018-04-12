class ProductList {
  constructor() {
    this._storage = [];
    this._id = 1;
  }

  getAllProducts() {
    return this._storage;
  }

  getId() {
    return this._id;
  }

  addProduct(name, price, inventory) {
    this._storage.push({
      id: this._id,
      name,
      price,
      inventory
    });
    this._id++;
  }

  updateProduct(myId, myName, myPrice, myInventory) {
    const myProduct = {
      id: myId,
      name: myName,
      price: myPrice,
      inventory: myInventory
    };
    this._storage.splice(myId, 1, myProduct);
  }

  deleteProduct(id) {
    const index = this._storage.map(obj => obj.id).indexOf(id);
    this._storage.splice(index, 1);
  }
}

module.exports = {
  ProductList
};
