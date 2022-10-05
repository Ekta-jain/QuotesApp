const express = require('express');
const quotes = require('./quotes.json');
const app = express();

app.get('/', (req, res) => (
  res.send('sent from response')
));

app.get('/quote', (req, res) => (
  res.status(200).json(quotes)
));

app.get('/random', (req, res) => {
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];
  res.status(200).json(quote);
});

app.listen(5010, () => (
  console.log('server strated on port 5010')
));
