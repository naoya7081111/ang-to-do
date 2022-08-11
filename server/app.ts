import express = require('express');

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.port || '3001';

app.listen(port, function () {
  console.log('I am running!');
});
