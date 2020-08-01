const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/user', (req, res) => {
  res.json([
    {
      email: 'bence@salarify.me'
    },
    {
      email: 'zsolt@salarify.me'
    },
    {
      email: 'paolo@salarify.me'
    }
  ]);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
