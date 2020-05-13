const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  if (type === 'CommentCreated') {
    data.status = data.content.includes('orange') ? 'rejected' : 'approved';
  }

  axios.post('http://localhost:4005/events', {
    type: 'CommentModerated',
    data,
  });
  console.log(req.body);
  res.status(200).send(req.body);
});

app.listen(4003, () => console.log('Listening port 4003'));
