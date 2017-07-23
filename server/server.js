const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
