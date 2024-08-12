const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// ตั้งค่าการเชื่อมต่อฐานข้อมูล
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',        // เปลี่ยนเป็นชื่อผู้ใช้ของคุณ
  password: 'password',    // เปลี่ยนเป็นรหัสผ่านของคุณ
  database: 'mydatabase'   // เปลี่ยนเป็นชื่อฐานข้อมูลของคุณ
});

// ตรวจสอบการเชื่อมต่อฐานข้อมูล
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// สร้าง API สำหรับดึงข้อมูลผู้ใช้
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
      return;
    }
    res.json(results);
  });
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
