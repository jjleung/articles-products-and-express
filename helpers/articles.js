const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "ap_user",
    password: "password",
    database: "ap_db"
  }
});

class ArticleList {
  constructor() {
    this._storage = [];
    this._id = 1;
  }

  getAllArticles() {
    return this._storage;
  }

  getId() {
    return this._id;
  }

  addArticle(title, content, author) {
    this._storage.push({
      id: this._id,
      title,
      content,
      author
    });
    this._id++;
  }

  updateArticle(myId, myTitle, myContent, myAuthor) {
    const myArticle = {
      id: myId,
      title: myTitle,
      content: myContent,
      author: myAuthor
    };
    this._storage.splice(myId, 1, myArticle);
  }

  deleteArticle(myTitle) {
    const index = this._storage.map(obj => obj.title).indexOf(myTitle);
    this._storage.splice(index, 1);
  }
}

module.exports = {
  ArticleList
};
