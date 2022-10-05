/* eslint-disable new-cap */
const express = require('express');
const noteRouter = express.Router();

noteRouter.post('/', (req, res) =>{
  res.send('Note Post request');
});

noteRouter.get('/', (req, res) =>{
  res.send('Note get request');
});

module.exports = noteRouter;
