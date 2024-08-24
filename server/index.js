// server/index.js
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Default XAMPP username
  password: '', // Default XAMPP password (leave empty if not set)
  database: 'socialmedia', // Your database name
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});  

const PORT = process.env.PORT || 3000; // Default to port 3000 if not set
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
