class DS_Articles {
  constructor() {
    this.storage = [];
    this.idNum = 1;
    this.initArticles();
    this.getAllArticles();
  }
  initArticles() {
    this.storage.push({
      id: this.idNum,
      name: "Article 1",
      desc: "something something squids"
    });
    this.idNum++;
    this.storage.push({
      id: this.idNum,
      name: "Article 2",
      desc: "the Dark Side"
    });
    this.idNum++;
  }
  getAllArticles() {
    return this.storage.slice();
  }
  getArticleById(id) {
    let result;
    this.storage.forEach(art => {
      if (art.id === id) {
        result = art;
      }
    });
    return result;
  }
  createArticle(name, desc) {
    this.storage.push({ id: this.idNum, name, desc });
    this.idNum++;
  }
  deleteArticleById(id) {
    this.storage.slice().forEach((art, idx) => {
      if (art.id === id) {
        this.storage.splice(idx, 1);
      }
    });
  }
}

module.exports = new DS_Articles();
