const express = require("express");
const app = express();

// Middleware: Acts like a waiter checking the customer's request
app.use((req, res, next) => {
  console.log("Waiter: Checking if the request is valid...");
  next(); // Pass to the next step
});

// Middleware: Logging orders (like keeping restaurant records)
app.use((req, res, next) => {
  console.log(`Logging Order: ${req.method} request to ${req.url}`); //gets the request method and url
  next();
});

// Kitchen: The final response
app.get("/", (req, res) => {
  res.send("Here is your food! 🍔");
});

// Start the restaurant (server)
app.listen(3000, () => console.log("Restaurant is open on port 3000"));



/*Middleware is like the waiter in a restaurant. It prepares, validates, and manages requests before they reach the final handler (the kitchen/server).

Forget to call next()? The order never reaches the kitchen!
Use multiple middleware? It’s like different waiters adding extra services before your food arrives.*/ 