class DS_Products {
  constructor() {
    this.storage = [];
    this.idNum = 1;
    this.initProducts();
  }
  initProducts() {
    this.storage.push({
      id: this.idNum,
      name: "Product 1",
      desc: "cookies"
    });
    this.idNum++;
    this.storage.push({
      id: this.idNum,
      name: "Product 2",
      desc: "melk"
    });
    this.idNum++;
  }
  getAllProducts() {
    return this.storage.slice();
  }
  getProductById(id) {
    let result;
    this.storage.forEach(prod => {
      if (prod.id === id) {
        result = prod;
      }
    });
    return result;
  }
  createProduct(name, desc) {
    this.storage.push({ id: this.idNum, name, desc });
    this.idNum++;
  }
  deleteProductById(id) {
    this.storage.slice().forEach((prod, idx) => {
      if (prod.id === id) {
        this.storage.splice(idx, 1);
      }
    });
  }
}

module.exports = new DS_Products();
