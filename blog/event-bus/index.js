const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const event = req.body;

  axios.post('http://localhost:4000/events', event); //posts
  axios.post('http://localhost:4001/events', event); //comments
  axios.post('http://localhost:4002/events', event); //query
  axios.post('http://localhost:4003/events', event); //moderation

  console.log(event);
  res.status(200).send(event);
});

app.listen(4005, () => console.log('listening port 4005'));
