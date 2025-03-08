const express = require('express');
const app = express();

//application level middleware
app.set('view engine', 'ejs');

//routing
app.get('/', (req, res) => {
  res.send('index page');
})
app.post('/api/data', (req, res) => {
  res.json({ message: 'data received',
    data: req.body
   });
});

// this middleware will not allow the request to go beyond it
app.use(function (req, res, next) {
  res.send('Hello World')
})

// requests will never reach this route
app.get('/', function (req, res) {
  res.send('Welcome')
})