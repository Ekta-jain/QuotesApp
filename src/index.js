const express = require('express');
const noteRouter = require('./routes/noteRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use('/users', userRouter);
app.use('/note', noteRouter);

app.get('/', (req, res) => (
  res.send('sent from response')
));


});

app.listen(5010, () => (
  console.log('server strated on port 5010')
));

