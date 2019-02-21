var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
//   queryItems();
  start();
});
function start() {
    inquirer
      .prompt({
        name: "shopOrExit",
        type: "list",
        message: "Would you like to [SHOP] in the store or [Exit] ?",
        choices: ["SHOP", "EXIT"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.shopOrExit === "SHOP") {
          queryItems();
        }
         else{
          connection.end();
        }
      });
  }
function queryItems() {
    connection.query("SELECT * FROM products", function(err, results) {
        console.table(results);
        inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "Which item would you like?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many units would you like?",
        
        
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].id === parseInt(answer.item)) {
            chosenItem = results[i];
          }
        }
        // console.log(chosenItem);
        
        if (chosenItem.stock_quantity >= parseInt(answer.quantity))  {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: chosenItem.stock_quantity - (parseInt(answer.quantity))
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
            //   if (error) throw err;
              console.log("Purchase made successfully! Your total is $"+chosenItem.price * parseInt(answer.quantity));
              start();
            }
          );
        }
        else {
          // quantity too large, so apologize and start over
          console.log("We do not have that many, please try a lower quantity.");
          start();
        }
      });
    });
  }






