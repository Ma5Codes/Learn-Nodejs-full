const express = require("express");
const app = express();

// Highway to the homepage
app.get("/", (req, res) => {
  res.send("Welcome to Express City! 🏙️");
});

// A route leading to a specific shop (e.g., a user profile)
app.get("/user/:id", (req, res) => {
  res.send(`Welcome to User Profile 
    ${req.params.id} 🚗`);
});

// A road that only allows POST requests (like a delivery-only lane)
app.post("/order", (req, res) => {
  res.send("Order received! 🛒");
});

//get all  products
app.get("/set/products",(req, res) => {
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
    ]
    res.json(products);
});

//single product
app.get("/set/product/:id", (req, res) => {
    const product = { id: req.params.id, name: "Product 1" };
    res.json(product);
});

// Start the city (server)
app.listen(3000, () => console.log("Express City is running on port 3000"));


/*
Middleware is like a waiter 🍽️, processing requests before they reach the server.
Routing is like a city road system 🚗, directing requests (drivers) to the right destinations.
Error handling is like an emergency response team 🚨, catching problems and ensuring they don’t break the entire app. */