const express = require('express');
const noteRouter = require('./routes/noteRoutes');
const userRouter = require('./routes/userRoutes');
// for connecting mongoDb from nodeJs project we use Mongoose library
const mongoose = require('mongoose');

const app = express();
app.use('/users', userRouter);
app.use('/note', noteRouter);

app.get('/', (req, res) => (
  res.send('sent from response')
));


mongoose.connect('mongodb+srv://admin:admin@cluster0.khbktxq.mongodb.net/?retryWrites=true&w=majority').then(
    ()=>{
      app.listen(5010, () => (
        console.log('server strated on port 5010')
      ));
    },
).catch((error) =>{
  console.log(error);
});


