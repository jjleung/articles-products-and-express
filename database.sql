DROP DATABASE IF EXISTS ap_db;
DROP USER IF EXISTS ap_user;
CREATE USER ap_user
WITH PASSWORD 'password';
CREATE DATABASE ap_db
OWNER ap_user;
\c ap_db;
SET ROLE ap_user;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS products;
CREATE TABLE articles
(
    article_id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(90) NOT NULL,
    content text NOT NULL,
    author VARCHAR(90) NOT NULL
);
CREATE TABLE products
(
    product_id SERIAL NOT NULL PRIMARY KEY,
    prod_name VARCHAR(90) NOT NULL,
    price INTEGER,
    inventory INTEGER
);
