const express = require('express');
const quotes = require('./quotes.json');
const noteRouter = require('./routes/noteRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();
app.use('/users', userRouter);
app.use('/note', noteRouter);

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
