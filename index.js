const express = require('express');
const users = require('./users');

const app = express();

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});

app.get('/', (_, res) => {
  res.send('Hello');
});

app.get('/users', (_, res) => {
  res.json(users);
});

app.get(`/users/:userId`, (req, res) => {
  if (req.params.userId === undefined || req.params.userId === null) {
    res.console.error('undefined');
  }
  const selectedUser = users.filter(
    (user) => user.userId === Number(req.params.userId)
  );

  res.json(selectedUser);
});
