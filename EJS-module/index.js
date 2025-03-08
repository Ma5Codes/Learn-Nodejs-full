const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();

//set the view engine as ejs
app.set('view engine', 'ejs');

//set the views directory to the views folder
app.set('views', path.join(__dirname, 'views'));

const products = [
    {
        name: 'iPhone',
        price: 800
    },
    {
        name: 'Samsung Galaxy',
        price: 750
    },
    {
        name: 'Google Pixel',
        price: 650
    }
];
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        products: products
    })
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    })
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
