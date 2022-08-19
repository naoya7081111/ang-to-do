import express = require('express');
const mysql = require('mysql');

const app: express.Express = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9711Naoya',
  database: 'complete_to_do',
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.port || '3001';
app.listen(port, function () {
  console.log('I am running!');
});

app.get('/api/v1/tasks', (req: express.Request, res: express.Response) => {
  connection.query('SELECT * FROM task', (error: any, results: any) => {
    const tasks = results;
    res.json({ tasks: tasks });
  });
});
