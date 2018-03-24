const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const DS_Articles = require("./db/DS");
const DS_Inhabitants = require("./db/DS");
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
  res.render("index", { hello: "test /" });
});

server.get("/articles", (req, res) => {
  const art = DS_Articles.getAllArticles();
  res.render("article", { art });
});

server.get("/products", (req, res) => {
  res.render("product");
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
