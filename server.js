const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const DS_Articles = require("./db/DS_Articles.js");
const DS_Products = require("./db/DS_Products.js");
const server = express();
const PORT = 8080;

server.use(bodyParser.urlencoded({ extended: true }));

server.engine(
  "hbs",
  hbs({
    defaultLayout: "main",
    extname: ".hbs"
  })
);

server.set("view engine", "hbs");

server.get("/", (req, res) => {
  res.render("home", { hello: "test /" });
});

server.get("/articles", (req, res) => {
  const articles = DS_Articles.getAllArticles();
  res.render("article", { articles });
});

server.get("/products", (req, res) => {
  const products = DS_Products.getAllProducts();
  res.render("product", { products });
});

server.get("/articles/:id", (req, res) => {
  const artId = Number(req.params.id);
  const art = DS_Articles.getArticleById(artId);

  res.render("article_detail", art);
});

server.get("/products/:id", (req, res) => {
  const prodId = Number(req.params.id);
  const prod = DS_Products.getProductById(prodId);

  res.render("product_detail", prod);
});

server.post("/articles", (req, res) => {
  const nameData = req.body.a_name;
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
