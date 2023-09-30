const express = require("express");
const cors = require('cors')
const app = express();
const path = require('path');

app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'))
})


module.exports = app;