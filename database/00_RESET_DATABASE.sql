-- ============================================================================
-- DROP AND RECREATE DATABASE
-- ============================================================================

USE master;
GO

-- Xóa database nếu tồn tại
IF EXISTS (SELECT * FROM sys.databases WHERE name = 'TRA_VINH_PAGODA')
BEGIN
    ALTER DATABASE TRA_VINH_PAGODA SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE TRA_VINH_PAGODA;
END
GO

-- Tạo database mới
CREATE DATABASE TRA_VINH_PAGODA;
GO

USE TRA_VINH_PAGODA;
GO

-- ============================================================================
-- CREATE TABLES
-- ============================================================================

CREATE TABLE Category (
    _id INT PRIMARY KEY IDENTITY(1,1),
    type_name NVARCHAR(100) NOT NULL,
    district NVARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE()
);

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

CREATE TABLE PagodaImage (
    _id INT PRIMARY KEY IDENTITY(1,1),
    pagoda_id INT NOT NULL,
    image_url NVARCHAR(500),
    image_title NVARCHAR(200),
    display_order INT,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (pagoda_id) REFERENCES Pagoda(_id) ON DELETE CASCADE
);

CREATE TABLE Post (
    _id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(300) NOT NULL,
    content NVARCHAR(MAX),
    thumbnail NVARCHAR(500),
    author NVARCHAR(100),
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE()
);

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
-- INSERT DATA
-- ============================================================================

INSERT INTO Category (type_name, district) VALUES
(N'Chùa Khmer', N'Trà Ôn'),
(N'Chùa Khmer', N'Cầu Ngang'),
(N'Chùa Việt', N'Thành phố Trà Vinh'),
(N'Chùa Hoa', N'Duyên Hải');

INSERT INTO Pagoda (name, history, description, address, latitude, longitude, category_id) VALUES
(N'Chùa Cô Tôn', N'Chùa được xây dựng vào thế kỷ 18, là nơi thờ phụng Phật Bà Quan Âm. Chùa có kiến trúc kết hợp giữa phong cách Khmer và Việt, với những bức tượng Phật được chạm khắc tinh xảo.', N'Kiến trúc Khmer-Việt độc đáo với tượng Phật Bà Quan Âm cao 3m, sân chùa rộng với cây cổ thụ, hồ nước tự nhiên xung quanh', N'Xã Tân Phú Đông, huyện Trà Ôn', 9.5234, 106.3456, 1),
(N'Chùa Ông Mười', N'Chùa được xây dựng vào năm 1850, là nơi thờ phụng Ông Mười - vị thần bảo vệ thương mại và giao thương. Chùa đã được tu sửa nhiều lần để giữ gìn vẻ đẹp cổ kính.', N'Kiến trúc truyền thống Việt với tượng Ông Mười cao 2.5m, bàn thờ được chạm khắc công phu, không gian yên tĩnh thanh bình', N'Thành phố Trà Vinh', 9.5678, 106.3789, 3),
(N'Chùa Khmer Mạc Cửu', N'Chùa được xây dựng vào thế kỷ 19, là nơi tu hành của các nhà sư Khmer. Chùa có kiến trúc Khmer nguyên bản với những chi tiết trang trí tinh xảo.', N'Kiến trúc Khmer nguyên bản với tượng Phật Thích Ca Mâu Ni, hành lang dài với cột trụ chạm khắc, vườn cây cảnh đẹp mắt', N'Xã Tân Phú Tây, huyện Trà Ôn', 9.5345, 106.3567, 1),
(N'Chùa Cái Bè', N'Chùa được xây dựng vào thế kỷ 18, là nơi thờ phụng Phật Bà Quan Âm. Chùa nổi tiếng với vị trí đẹp nhìn ra sông Hậu.', N'Vị trí địa lý độc đáo giữa sông nước với tượng Phật Bà Quan Âm, cảnh sông nước tuyệt đẹp, không gian yên bình tĩnh lặng', N'Xã Cái Bè, huyện Cầu Ngang', 9.4567, 106.2345, 2),
(N'Chùa Ông Bà', N'Chùa được xây dựng vào năm 1920, là nơi thờ phụng các vị tổ tiên của cộng đồng Việt kiều. Chùa có kiến trúc kết hợp giữa phong cách Việt và Pháp.', N'Kiến trúc Việt-Pháp độc đáo với bàn thờ tổ tiên truyền thống, không gian gia đình ấm cúng, lịch sử văn hóa phong phú', N'Thành phố Trà Vinh', 9.5789, 106.3890, 3),
(N'Chùa Mỹ Tho', N'Chùa được xây dựng vào thế kỷ 19, là nơi tu hành của các nhà sư. Chùa có kiến trúc truyền thống Việt với những chi tiết trang trí độc đáo.', N'Kiến trúc truyền thống Việt với tượng Phật Thích Ca Mâu Ni cao 2m, bàn thờ được chạm khắc công phu, vườn cây cảnh xanh mát', N'Xã Tân Phú Tây, huyện Trà Ôn', 9.5456, 106.3678, 1);

INSERT INTO PagodaImage (pagoda_id, image_url, image_title, display_order) VALUES
(1, N'https://via.placeholder.com/600x400?text=Chùa+Cô+Tôn+1', N'Chùa Cô Tôn - Tổng quan', 1),
(1, N'https://via.placeholder.com/600x400?text=Chùa+Cô+Tôn+2', N'Chùa Cô Tôn - Chi tiết', 2),
(2, N'https://via.placeholder.com/600x400?text=Chùa+Ông+Mười+1', N'Chùa Ông Mười - Tổng quan', 1),
(2, N'https://via.placeholder.com/600x400?text=Chùa+Ông+Mười+2', N'Chùa Ông Mười - Chi tiết', 2),
(3, N'https://via.placeholder.com/600x400?text=Chùa+Khmer+Mạc+Cửu+1', N'Chùa Khmer Mạc Cửu - Tổng quan', 1),
(4, N'https://via.placeholder.com/600x400?text=Chùa+Cái+Bè+1', N'Chùa Cái Bè - Tổng quan', 1),
(5, N'https://via.placeholder.com/600x400?text=Chùa+Ông+Bà+1', N'Chùa Ông Bà - Tổng quan', 1),
(6, N'https://via.placeholder.com/600x400?text=Chùa+Mỹ+Tho+1', N'Chùa Mỹ Tho - Tổng quan', 1);

INSERT INTO Post (title, content, thumbnail, author) VALUES
(N'Khám Phá Kiến Trúc Chùa Khmer Tại Trà Vinh', N'Trà Vinh là một trong những nơi có nhiều chùa Khmer đẹp nhất ở Việt Nam. Kiến trúc của các ngôi chùa này phản ánh sự kết hợp độc đáo giữa phong cách Khmer truyền thống và ảnh hưởng của văn hóa Việt. Những chi tiết chạm khắc tinh xảo trên các cột trụ, mái chùa và bàn thờ là những minh chứng cho sự tài ba của các nghệ nhân Khmer.', N'https://via.placeholder.com/400x300?text=Kiến+Trúc+Khmer', N'Admin'),
(N'Lịch Sử Phát Triển Các Ngôi Chùa Tại Trà Vinh', N'Các ngôi chùa tại Trà Vinh có lịch sử phát triển lâu đời, từ thế kỷ 18 đến nay. Mỗi ngôi chùa đều có những câu chuyện thú vị về quá khứ, những nhân vật lịch sử quan trọng và những sự kiện đáng nhớ. Việc bảo tồn và phát triển các ngôi chùa này là trách nhiệm của cộng đồng địa phương.', N'https://via.placeholder.com/400x300?text=Lịch+Sử+Chùa', N'Admin'),
(N'Du Lịch Tâm Linh Tại Trà Vinh', N'Trà Vinh là một điểm đến lý tưởng cho những ai muốn tìm hiểu về du lịch tâm linh. Các ngôi chùa tại đây không chỉ là những công trình kiến trúc đẹp mà còn là những nơi linh thiêng, nơi mà nhiều người đến để cầu nguyện, tìm kiếm sự bình yên và thanh tịnh.', N'https://via.placeholder.com/400x300?text=Du+Lịch+Tâm+Linh', N'Admin');

INSERT INTO Account (username, password, role) VALUES
(N'admin', N'$2b$10$YourHashedPasswordHere', N'admin'),
(N'editor', N'$2b$10$YourHashedPasswordHere', N'editor');

PRINT 'Database TRA_VINH_PAGODA created successfully!';
