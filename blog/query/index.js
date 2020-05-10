const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.status(200).send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  const { id, title, postId, content } = data;

  if (type === 'PostCreated') {
    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    posts[postId].comments.push({ id, content });
  }
  console.log(JSON.stringify(posts, null, 2));
});

app.listen(4002, () => console.log('listening port 4002'));
