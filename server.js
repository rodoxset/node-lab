'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Nova versão lab DevOps 2!');
});

app.get('*', (req, res) => {
  res.send('errrrouuuuu!', 404);
});

app.listen(PORT, HOST);
