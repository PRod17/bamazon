DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL, 
price INTEGER(10),
stock_quantity INTEGER(10),
primary key (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Turbos", "Performance", 500, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Downpipe", "Performance", 350, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Intake", "Performance", 800, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Exhaust", "Performance", 650, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brakes", "Suspension", 1800, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Anti-Roll Bar", "Suspension", 500, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Seat Cover Set", "Interior", 250, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Floor Mat Set", "Interior", 100, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headliner", "Interior", 150, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pistol Shifter", "Interior", 300, 1);
