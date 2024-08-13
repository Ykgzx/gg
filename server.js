import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.get('/users', (req, res) => {
  const query = 'SELECT * FROM Users';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(result);
  });
});

app.get('/posts', (req, res) => {
  const query = `
    SELECT 
      u.user_id, 
      u.first_name, 
      u.last_name, 
      p.post_title AS title, 
      p.post_picture AS picture, 
      p.post_video_url AS post_video_url, 
      p.post_updated_at 
    FROM 
      Posts p
    JOIN 
      Users u ON p.user_id = u.user_id
  `;
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching posts:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
