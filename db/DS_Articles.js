const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "ap_user",
    password: "password",
    database: "ap_db"
  }
});

const getAllArticles = () => {
  return knex
    .select()
    .from("article")
    .orderBy("article_id", "asc")
    .then(data => {
      return data;
    });
};

const getArticleByTitle = title => {
  return knex
    .select()
    .from("article")
    .where({
      article_title: title
    })
    .then(article => {
      return article[0];
    });
};

const addArticle = (title, content, author) => {
  return knex("article").insert({
    article_title: title,
    article_content: content,
    article_author: author
  });
};

const updateArticle = (id, title, content, author) => {
  return knex("article")
    .where("article_id", "=", id)
    .update({
      article_title: title,
      article_content: content,
      article_author: author
    });
};

const deleteArticle = title => {
  return knex("article")
    .where("article_title", "=", title)
    .del();
};

module.exports = {
  getAllArticles,
  addArticle,
  getArticleByTitle,
  updateArticle,
  deleteArticle
};
