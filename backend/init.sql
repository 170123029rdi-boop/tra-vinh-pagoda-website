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

-- Insert default data
INSERT INTO pagodas (name, category, district, image, description) VALUES
('Chùa Cô Tôn', 'Chùa Khmer', 'Trà Ôn', 'https://via.placeholder.com/400x300?text=Chùa+Cô+Tôn', 'Kiến trúc Khmer-Việt độc đáo'),
('Chùa Ông Mười', 'Chùa Việt', 'Thành phố Trà Vinh', 'https://via.placeholder.com/400x300?text=Chùa+Ông+Mười', 'Kiến trúc truyền thống Việt'),
('Chùa Khmer Mạc Cửu', 'Chùa Khmer', 'Trà Ôn', 'https://via.placeholder.com/400x300?text=Chùa+Khmer', 'Kiến trúc Khmer nguyên bản');
