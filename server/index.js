import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'socialmedia',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});

// GET route to fetch all posts
app.get('/api/posts', (req, res) => {
  const sqlQuery = `
    SELECT posts.post_id, posts.user_id, posts.content, posts.created_at, posts.likes, posts.images, posts.videos, posts.comment_count,
           users.username, users.profile_picture
    FROM posts
    JOIN users ON posts.user_id = users.user_id
  `;
  
  db.query(sqlQuery, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST route to add a new comment
app.post('/api/comments', (req, res) => {
  const { post_id, user_id, content } = req.body;
  const sqlQuery = 'INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)';
  
  db.query(sqlQuery, [post_id, user_id, content], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ comment_id: result.insertId, post_id, user_id, content });
  });
});

// GET route to fetch all comments for a specific post with user profile
app.get('/api/posts/:post_id/comments', (req, res) => {
  const { post_id } = req.params;
  const sqlQuery = `
    SELECT comments.comment_id, comments.post_id, comments.user_id, comments.content, comments.created_at, users.username, users.profile_picture
    FROM comments
    JOIN users ON comments.user_id = users.user_id
    WHERE comments.post_id = ?
  `;
  
  db.query(sqlQuery, [post_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST route to add a reply to a comment
app.post('/api/replies', (req, res) => {
  const { comment_id, user_id, content } = req.body;
  const sqlQuery = 'INSERT INTO replies (comment_id, user_id, content) VALUES (?, ?, ?)';
  
  db.query(sqlQuery, [comment_id, user_id, content], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ reply_id: result.insertId, comment_id, user_id, content });
  });
});

// GET route to fetch all replies for a specific comment with user profile
app.get('/api/comments/:comment_id/replies', (req, res) => {
  const { comment_id } = req.params;
  const sqlQuery = `
    SELECT replies.reply_id, replies.comment_id, replies.parent_reply_id, replies.user_id, replies.content, replies.created_at, users.username, users.profile_picture
    FROM replies
    JOIN users ON replies.user_id = users.user_id
    WHERE replies.comment_id = ?
  `;
  
  db.query(sqlQuery, [comment_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// GET route to fetch all notifications for a specific user
app.get('/api/users/:user_id/notifications', (req, res) => {
  const { user_id } = req.params;
  const sqlQuery = `
    SELECT notifications.notification_id, notifications.user_id, notifications.type, notifications.content, notifications.status, notifications.created_at, users.username
    FROM notifications
    JOIN users ON notifications.user_id = users.user_id
    WHERE notifications.user_id = ?
    ORDER BY notifications.created_at DESC
  `;
  
  db.query(sqlQuery, [user_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// POST route to add a new notification
app.post('/api/notifications', (req, res) => {
  const { user_id, type, content } = req.body;
  const sqlQuery = 'INSERT INTO notifications (user_id, type, content) VALUES (?, ?, ?)';
  
  db.query(sqlQuery, [user_id, type, content], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ notification_id: result.insertId, user_id, type, content });
  });
});

// PUT route to mark a notification as read
app.put('/api/notifications/:notification_id/read', (req, res) => {
  const { notification_id } = req.params;
  const sqlQuery = 'UPDATE notifications SET status = ? WHERE notification_id = ?';
  
  db.query(sqlQuery, ['read', notification_id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Notification marked as read' });
  });
});


// Friend Recommendation API for users who have different pets from the specified user
app.get('/api/users/:user_id/recommend-friends', (req, res) => {
  const { user_id } = req.params;

  // Query to find the pet preferences of the current user
  const userPetQuery = `SELECT pet FROM users WHERE user_id = ?`;

  db.query(userPetQuery, [user_id], (err, userResults) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (userResults.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Extract pets and split into an array
    const userPets = userResults[0].pet.split(',').map(pet => pet.trim());

    // Query to find other users with different pet preferences
    const recommendQuery = `
      SELECT u.user_id, u.username, u.profile_picture, u.pet
      FROM users u
      LEFT JOIN friendships f ON u.user_id = f.friend_id AND f.user_id = ?
      WHERE f.friend_id IS NULL
      AND u.user_id != ?
      AND NOT EXISTS (
        SELECT 1
        FROM JSON_TABLE(CONCAT('[', REPLACE(u.pet, ', ', '","'), ']'), "$[*]" COLUMNS (pet VARCHAR(255) PATH "$")) as pets
        WHERE pets.pet IN (?)
      )
    `;

    db.query(recommendQuery, [user_id, user_id, userPets], (err, recommendResults) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json(recommendResults);
    });
  });
});

// User Profile API
app.get('/api/users/:user_id/profile', (req, res) => {
  const { user_id } = req.params;

  // Query to fetch the user details
  const userQuery = `
    SELECT user_id, username, email, bio, profile_picture, created_at, pet
    FROM users
    WHERE user_id = ?
  `;

  db.query(userQuery, [user_id], (err, userResults) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (userResults.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = userResults[0];

    // Query to fetch the user's posts
    const postsQuery = `
      SELECT post_id, content, created_at, likes, images, videos, comment_count
      FROM posts
      WHERE user_id = ?
      ORDER BY created_at DESC
    `;

    db.query(postsQuery, [user_id], (err, postResults) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // Query to fetch the user's friends
      const friendsQuery = `
        SELECT u.user_id, u.username, u.profile_picture, u.pet
        FROM friendships f
        JOIN users u ON f.friend_id = u.user_id
        WHERE f.user_id = ?
      `;

      db.query(friendsQuery, [user_id], (err, friendResults) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        // Send the complete user profile data
        res.json({
          user: {
            user_id: user.user_id,
            username: user.username,
            email: user.email,
            bio: user.bio,
            profile_picture: user.profile_picture,
            created_at: user.created_at,
            pet: user.pet,
          },
          posts: postResults,
          friends: friendResults
        });
      });
    });
  });
});

// login user
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Query to find the user by username
  const userQuery = 'SELECT * FROM users WHERE username = ?';
  
  db.query(userQuery, [username], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const user = results[0];

    if (user.password === password) {
      // Password matches
      res.status(200).json({ message: 'Login successful!' });
    } else {
      // Invalid password
      res.status(401).json({ error: 'Invalid username or password' });
    }
  });
});




// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
