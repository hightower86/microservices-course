const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const event = req.body;

  await axios.post('http://localhost:4000/events', event);
  await axios.post('http://localhost:4001/events', event);

  console.log(event);
  res.status(200).send(event);
});

app.listen(4005, () => console.log('listening port 4005'));
