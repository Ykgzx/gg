import mysql from 'mysql2';

const db = mysql.createConnection({
  host: '127.0.0.1', // Use IPv4 loopback address
  user: 'root',
  password: '',
  database: 'socialmedia',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to database');
  db.end(); // Close the connection
});
