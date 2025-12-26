-- ============================================================================
-- DATABASE: TRA_VINH_PAGODA
-- DESCRIPTION: Database for Tra Vinh Pagoda Website
-- ============================================================================

-- Create Database
CREATE DATABASE TRA_VINH_PAGODA;
GO

USE TRA_VINH_PAGODA;
GO

-- ============================================================================
-- TABLE: Category (Danh mục)
-- ============================================================================
CREATE TABLE Category (
    _id INT PRIMARY KEY IDENTITY(1,1),
    type_name NVARCHAR(100) NOT NULL,
    district NVARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE()
);

-- ============================================================================
-- TABLE: Pagoda (Ngôi chùa)
-- ============================================================================
CREATE TABLE Pagoda (
    _id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(200) NOT NULL,
    history NVARCHAR(MAX),
    description NVARCHAR(MAX),
    address NVARCHAR(300),
    latitude FLOAT,
    longitude FLOAT,
    category_id INT NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (category_id) REFERENCES Category(_id)
);

-- ============================================================================
-- TABLE: PagodaImage (Ảnh chùa)
-- ============================================================================
CREATE TABLE PagodaImage (
    _id INT PRIMARY KEY IDENTITY(1,1),
    pagoda_id INT NOT NULL,
    image_url NVARCHAR(500),
    image_title NVARCHAR(200),
    display_order INT,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (pagoda_id) REFERENCES Pagoda(_id) ON DELETE CASCADE
);

-- ============================================================================
-- TABLE: Post (Bài viết/Tin tức)
-- ============================================================================
CREATE TABLE Post (
    _id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(300) NOT NULL,
    content NVARCHAR(MAX),
    thumbnail NVARCHAR(500),
    author NVARCHAR(100),
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE()
);

-- ============================================================================
-- TABLE: Account (Admin)
-- ============================================================================
CREATE TABLE Account (
    _id INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(100) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL,
    role NVARCHAR(50) DEFAULT 'admin',
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE()
);

-- ============================================================================
-- CREATE INDEXES
-- ============================================================================
CREATE INDEX idx_pagoda_category ON Pagoda(category_id);
CREATE INDEX idx_pagoda_image ON PagodaImage(pagoda_id);
CREATE INDEX idx_post_author ON Post(author);
CREATE INDEX idx_account_username ON Account(username);

-- ============================================================================
-- INSERT SAMPLE DATA
-- ============================================================================

-- Insert Categories
INSERT INTO Category (type_name, district) VALUES
(N'Chùa Khmer', N'Trà Ôn'),
(N'Chùa Khmer', N'Cầu Ngang'),
(N'Chùa Việt', N'Thành phố Trà Vinh'),
(N'Chùa Hoa', N'Duyên Hải');

-- Insert Pagodas
INSERT INTO Pagoda (name, history, description, address, latitude, longitude, category_id) VALUES
(N'Chùa Cô Tôn', 
 N'Chùa được xây dựng vào thế kỷ 18, là nơi thờ phụng Phật Bà Quan Âm. Chùa có kiến trúc kết hợp giữa phong cách Khmer và Việt, với những bức tượng Phật được chạm khắc tinh xảo.',
 N'Kiến trúc Khmer-Việt độc đáo với tượng Phật Bà Quan Âm cao 3m, sân chùa rộng với cây cổ thụ, hồ nước tự nhiên xung quanh',
 N'Xã Tân Phú Đông, huyện Trà Ôn',
 9.5234, 106.3456, 1),

(N'Chùa Ông Mười',
 N'Chùa được xây dựng vào năm 1850, là nơi thờ phụng Ông Mười - vị thần bảo vệ thương mại và giao thương. Chùa đã được tu sửa nhiều lần để giữ gìn vẻ đẹp cổ kính.',
 N'Kiến trúc truyền thống Việt với tượng Ông Mười cao 2.5m, bàn thờ được chạm khắc công phu, không gian yên tĩnh thanh bình',
 N'Thành phố Trà Vinh',
 9.5678, 106.3789, 3),

(N'Chùa Khmer Mạc Cửu',
 N'Chùa được xây dựng vào thế kỷ 19, là nơi tu hành của các nhà sư Khmer. Chùa có kiến trúc Khmer nguyên bản với những chi tiết trang trí tinh xảo.',
 N'Kiến trúc Khmer nguyên bản với tượng Phật Thích Ca Mâu Ni, hành lang dài với cột trụ chạm khắc, vườn cây cảnh đẹp mắt',
 N'Xã Tân Phú Tây, huyện Trà Ôn',
 9.5345, 106.3567, 1),

(N'Chùa Cái Bè',
 N'Chùa được xây dựng vào thế kỷ 18, là nơi thờ phụng Phật Bà Quan Âm. Chùa nổi tiếng với vị trí đẹp nhìn ra sông Hậu.',
 N'Vị trí địa lý độc đáo giữa sông nước với tượng Phật Bà Quan Âm, cảnh sông nước tuyệt đẹp, không gian yên bình tĩnh lặng',
 N'Xã Cái Bè, huyện Cầu Ngang',
 9.4567, 106.2345, 2),

(N'Chùa Ông Bà',
 N'Chùa được xây dựng vào năm 1920, là nơi thờ phụng các vị tổ tiên của cộng đồng Việt kiều. Chùa có kiến trúc kết hợp giữa phong cách Việt và Pháp.',
 N'Kiến trúc Việt-Pháp độc đáo với bàn thờ tổ tiên truyền thống, không gian gia đình ấm cúng, lịch sử văn hóa phong phú',
 N'Thành phố Trà Vinh',
 9.5789, 106.3890, 3),

(N'Chùa Mỹ Tho',
 N'Chùa được xây dựng vào thế kỷ 19, là nơi tu hành của các nhà sư. Chùa có kiến trúc truyền thống Việt với những chi tiết trang trí độc đáo.',
 N'Kiến trúc truyền thống Việt với tượng Phật Thích Ca Mâu Ni cao 2m, bàn thờ được chạm khắc công phu, vườn cây cảnh xanh mát',
 N'Xã Tân Phú Tây, huyện Trà Ôn',
 9.5456, 106.3678, 1);

-- Insert Pagoda Images
INSERT INTO PagodaImage (pagoda_id, image_url, image_title, display_order) VALUES
(1, N'https://via.placeholder.com/600x400?text=Chùa+Cô+Tôn+1', N'Chùa Cô Tôn - Tổng quan', 1),
(1, N'https://via.placeholder.com/600x400?text=Chùa+Cô+Tôn+2', N'Chùa Cô Tôn - Chi tiết', 2),
(2, N'https://via.placeholder.com/600x400?text=Chùa+Ông+Mười+1', N'Chùa Ông Mười - Tổng quan', 1),
(2, N'https://via.placeholder.com/600x400?text=Chùa+Ông+Mười+2', N'Chùa Ông Mười - Chi tiết', 2),
(3, N'https://via.placeholder.com/600x400?text=Chùa+Khmer+Mạc+Cửu+1', N'Chùa Khmer Mạc Cửu - Tổng quan', 1),
(4, N'https://via.placeholder.com/600x400?text=Chùa+Cái+Bè+1', N'Chùa Cái Bè - Tổng quan', 1),
(5, N'https://via.placeholder.com/600x400?text=Chùa+Ông+Bà+1', N'Chùa Ông Bà - Tổng quan', 1),
(6, N'https://via.placeholder.com/600x400?text=Chùa+Mỹ+Tho+1', N'Chùa Mỹ Tho - Tổng quan', 1);

-- Insert Posts
INSERT INTO Post (title, content, thumbnail, author) VALUES
(N'Khám Phá Kiến Trúc Chùa Khmer Tại Trà Vinh',
 N'Trà Vinh là một trong những nơi có nhiều chùa Khmer đẹp nhất ở Việt Nam. Kiến trúc của các ngôi chùa này phản ánh sự kết hợp độc đáo giữa phong cách Khmer truyền thống và ảnh hưởng của văn hóa Việt. Những chi tiết chạm khắc tinh xảo trên các cột trụ, mái chùa và bàn thờ là những minh chứng cho sự tài ba của các nghệ nhân Khmer.',
 N'https://via.placeholder.com/400x300?text=Kiến+Trúc+Khmer',
 N'Admin'),

(N'Lịch Sử Phát Triển Các Ngôi Chùa Tại Trà Vinh',
 N'Các ngôi chùa tại Trà Vinh có lịch sử phát triển lâu đời, từ thế kỷ 18 đến nay. Mỗi ngôi chùa đều có những câu chuyện thú vị về quá khứ, những nhân vật lịch sử quan trọng và những sự kiện đáng nhớ. Việc bảo tồn và phát triển các ngôi chùa này là trách nhiệm của cộng đồng địa phương.',
 N'https://via.placeholder.com/400x300?text=Lịch+Sử+Chùa',
 N'Admin'),

(N'Du Lịch Tâm Linh Tại Trà Vinh',
 N'Trà Vinh là một điểm đến lý tưởng cho những ai muốn tìm hiểu về du lịch tâm linh. Các ngôi chùa tại đây không chỉ là những công trình kiến trúc đẹp mà còn là những nơi linh thiêng, nơi mà nhiều người đến để cầu nguyện, tìm kiếm sự bình yên và thanh tịnh.',
 N'https://via.placeholder.com/400x300?text=Du+Lịch+Tâm+Linh',
 N'Admin');

-- Insert Admin Account
INSERT INTO Account (username, password, role) VALUES
(N'admin', N'$2b$10$YourHashedPasswordHere', N'admin'),
(N'editor', N'$2b$10$YourHashedPasswordHere', N'editor');

-- ============================================================================
-- VIEWS
-- ============================================================================

-- View: Danh sách chùa với thông tin danh mục
CREATE VIEW vw_pagoda_with_category AS
SELECT 
    p._id,
    p.name,
    p.history,
    p.description,
    p.address,
    p.latitude,
    p.longitude,
    c.type_name,
    c.district,
    p.created_at,
    p.updated_at
FROM Pagoda p
INNER JOIN Category c ON p.category_id = c._id;

-- View: Danh sách chùa với số lượng ảnh
CREATE VIEW vw_pagoda_with_image_count AS
SELECT 
    p._id,
    p.name,
    p.address,
    COUNT(pi._id) AS image_count,
    c.type_name
FROM Pagoda p
LEFT JOIN PagodaImage pi ON p._id = pi.pagoda_id
INNER JOIN Category c ON p.category_id = c._id
GROUP BY p._id, p.name, p.address, c.type_name;

-- ============================================================================
-- STORED PROCEDURES
-- ============================================================================

-- Procedure: Lấy danh sách chùa theo danh mục
CREATE PROCEDURE sp_get_pagoda_by_category
    @category_id INT
AS
BEGIN
    SELECT 
        p._id,
        p.name,
        p.description,
        p.address,
        c.type_name,
        c.district
    FROM Pagoda p
    INNER JOIN Category c ON p.category_id = c._id
    WHERE p.category_id = @category_id
    ORDER BY p.name;
END;

-- Procedure: Lấy chi tiết chùa với ảnh
CREATE PROCEDURE sp_get_pagoda_detail
    @pagoda_id INT
AS
BEGIN
    SELECT 
        p._id,
        p.name,
        p.history,
        p.description,
        p.address,
        p.latitude,
        p.longitude,
        c.type_name,
        c.district,
        p.created_at
    FROM Pagoda p
    INNER JOIN Category c ON p.category_id = c._id
    WHERE p._id = @pagoda_id;
    
    SELECT 
        _id,
        image_url,
        image_title,
        display_order
    FROM PagodaImage
    WHERE pagoda_id = @pagoda_id
    ORDER BY display_order;
END;

-- Procedure: Lấy danh sách bài viết
CREATE PROCEDURE sp_get_posts
    @page_number INT = 1,
    @page_size INT = 10
AS
BEGIN
    SELECT 
        _id,
        title,
        content,
        thumbnail,
        author,
        created_at
    FROM Post
    ORDER BY created_at DESC
    OFFSET (@page_number - 1) * @page_size ROWS
    FETCH NEXT @page_size ROWS ONLY;
END;

-- Procedure: Tìm kiếm chùa
CREATE PROCEDURE sp_search_pagoda
    @search_keyword NVARCHAR(200)
AS
BEGIN
    SELECT 
        p._id,
        p.name,
        p.description,
        p.address,
        c.type_name,
        c.district
    FROM Pagoda p
    INNER JOIN Category c ON p.category_id = c._id
    WHERE p.name LIKE N'%' + @search_keyword + N'%'
       OR p.description LIKE N'%' + @search_keyword + N'%'
       OR p.address LIKE N'%' + @search_keyword + N'%'
    ORDER BY p.name;
END;

-- ============================================================================
-- QUERIES THƯỜNG DÙNG
-- ============================================================================

-- Query 1: Lấy tất cả chùa
SELECT * FROM Pagoda;

-- Query 2: Lấy tất cả danh mục
SELECT * FROM Category;

-- Query 3: Lấy chùa theo danh mục
SELECT p.*, c.type_name, c.district
FROM Pagoda p
INNER JOIN Category c ON p.category_id = c._id
WHERE c.type_name = N'Chùa Khmer';

-- Query 4: Lấy chùa theo huyện
SELECT p.*, c.type_name
FROM Pagoda p
INNER JOIN Category c ON p.category_id = c._id
WHERE c.district = N'Trà Ôn';

-- Query 5: Lấy ảnh của chùa
SELECT * FROM PagodaImage WHERE pagoda_id = 1;

-- Query 6: Lấy tất cả bài viết
SELECT * FROM Post ORDER BY created_at DESC;

-- Query 7: Lấy bài viết theo tác giả
SELECT * FROM Post WHERE author = N'Admin' ORDER BY created_at DESC;

-- Query 8: Đếm số chùa theo danh mục
SELECT c.type_name, COUNT(p._id) AS pagoda_count
FROM Category c
LEFT JOIN Pagoda p ON c._id = p.category_id
GROUP BY c.type_name;

-- Query 9: Đếm số chùa theo huyện
SELECT c.district, COUNT(p._id) AS pagoda_count
FROM Category c
LEFT JOIN Pagoda p ON c._id = p.category_id
GROUP BY c.district;

-- Query 10: Lấy chùa có nhiều ảnh nhất
SELECT TOP 5 p._id, p.name, COUNT(pi._id) AS image_count
FROM Pagoda p
LEFT JOIN PagodaImage pi ON p._id = pi.pagoda_id
GROUP BY p._id, p.name
ORDER BY image_count DESC;

-- Query 11: Lấy bài viết gần đây nhất
SELECT TOP 5 * FROM Post ORDER BY created_at DESC;

-- Query 12: Tìm chùa theo tọa độ (gần nhất)
SELECT TOP 10 
    _id, 
    name, 
    address,
    SQRT(POWER(latitude - 9.5, 2) + POWER(longitude - 106.3, 2)) AS distance
FROM Pagoda
ORDER BY distance;
