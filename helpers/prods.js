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
    const currID = this._id;
    this._storage.push({
      id: this._id,
      name,
      price,
      inventory
    });
    this._id++;
  }

  updateProduct(id, name, price, inventory) {
    let productToUpdate = this._storage.filter(obj => {
      return obj.id === id;
    });
    const index = this._storage
      .map(obj => {
        return obj.id;
      })
      .indexOf(id);
    productToUpdate[0].name = name;
    productToUpdate[0].price = price;
    productToUpdate[0].inventory = inventory;
    this._storage.splice(index, 1, productToUpdate[0]);
  }

  deleteProduct(id) {
    const index = this._storage.map(obj => obj.id).indexOf(id);
    this._storage.splice(index, 1);
  }
}

module.exports = {
  ProductList
};
