const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test database connection and create tables
pool.connect(async (err, client, release) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to PostgreSQL database');
    
    // Create tables automatically
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS pagodas (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          category VARCHAR(100),
          district VARCHAR(100),
          image TEXT,
          description TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        
        CREATE TABLE IF NOT EXISTS posts (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          author VARCHAR(100),
          content TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        
        CREATE TABLE IF NOT EXISTS landscapes (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT,
          url TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      
      // Insert default data if tables are empty
      const result = await client.query('SELECT COUNT(*) FROM pagodas');
      if (result.rows[0].count === '0') {
        await client.query(`
          INSERT INTO pagodas (name, category, district, image, description) VALUES
          ('Chùa Cô Tôn', 'Chùa Khmer', 'Trà Ôn', 'https://via.placeholder.com/400x300?text=Chùa+Cô+Tôn', 'Kiến trúc Khmer-Việt độc đáo'),
          ('Chùa Ông Mười', 'Chùa Việt', 'Thành phố Trà Vinh', 'https://via.placeholder.com/400x300?text=Chùa+Ông+Mười', 'Kiến trúc truyền thống Việt'),
          ('Chùa Khmer Mạc Cửu', 'Chùa Khmer', 'Trà Ôn', 'https://via.placeholder.com/400x300?text=Chùa+Khmer', 'Kiến trúc Khmer nguyên bản')
        `);
        console.log('Default data inserted');
      }
      
      console.log('Database tables ready');
    } catch (error) {
      console.error('Error creating tables:', error);
    }
    
    release();
  }
});

// API Routes

// Get all pagodas
app.get('/api/pagodas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pagodas ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add pagoda
app.post('/api/pagodas', async (req, res) => {
  const { name, category, district, image, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO pagodas (name, category, district, image, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, category, district, image, description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update pagoda
app.put('/api/pagodas/:id', async (req, res) => {
  const { id } = req.params;
  const { name, category, district, image, description } = req.body;
  try {
    const result = await pool.query(
      'UPDATE pagodas SET name=$1, category=$2, district=$3, image=$4, description=$5 WHERE id=$6 RETURNING *',
      [name, category, district, image, description, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete pagoda
app.delete('/api/pagodas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM pagodas WHERE id=$1', [id]);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Posts routes
app.get('/api/posts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/posts', async (req, res) => {
  const { title, author, content } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO posts (title, author, content) VALUES ($1, $2, $3) RETURNING *',
      [title, author, content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Landscapes routes
app.get('/api/landscapes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM landscapes ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/landscapes', async (req, res) => {
  const { title, description, url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO landscapes (title, description, url) VALUES ($1, $2, $3) RETURNING *',
      [title, description, url]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Tra Vinh API Server' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
