import express = require('express');
import config from './config';

const mysql = require('mysql2/promise');
const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbSettings = config.db;

const port = process.env.port || '3001';

app.listen(port, function () {
  console.log('I am running!');
});

app.get(
  '/api/v1/tasks',
  async (req: express.Request, res: express.Response) => {
    let connection;
    const sql: string = 'SELECT * FROM tasks';
    const params: string[] = [];
    try {
      connection = await mysql.createConnection(dbSettings);
      const rows = await connection.execute(sql, params);
      await connection.commit();
      res.json({
        tasks: rows[0],
      });
    } catch (error) {
      await connection.rollback();
      console.log(error);
      res.json({
        status: 'error',
        error: 'fail to fetch data',
      });
    } finally {
      connection.end();
      return;
    }
  }
);
