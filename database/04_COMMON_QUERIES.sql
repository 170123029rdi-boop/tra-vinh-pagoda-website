-- ============================================================================
-- PART 4: COMMON QUERIES
-- ============================================================================

USE TRA_VINH_PAGODA;
GO

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

-- Query 13: Lấy chi tiết chùa với ảnh
SELECT 
    p._id,
    p.name,
    p.history,
    p.description,
    p.address,
    c.type_name,
    c.district,
    pi.image_url,
    pi.image_title
FROM Pagoda p
INNER JOIN Category c ON p.category_id = c._id
LEFT JOIN PagodaImage pi ON p._id = pi.pagoda_id
WHERE p._id = 1
ORDER BY pi.display_order;

-- Query 14: Lấy danh sách chùa với số lượng ảnh
SELECT 
    p._id,
    p.name,
    p.address,
    c.type_name,
    c.district,
    COUNT(pi._id) AS image_count
FROM Pagoda p
INNER JOIN Category c ON p.category_id = c._id
LEFT JOIN PagodaImage pi ON p._id = pi.pagoda_id
GROUP BY p._id, p.name, p.address, c.type_name, c.district
ORDER BY p.name;

-- Query 15: Lấy tất cả tài khoản admin
SELECT _id, username, role FROM Account;

-- Query 16: Kiểm tra tài khoản admin
SELECT * FROM Account WHERE username = N'admin';

-- Query 17: Lấy danh sách chùa Khmer theo huyện
SELECT p._id, p.name, p.address, c.district
FROM Pagoda p
INNER JOIN Category c ON p.category_id = c._id
WHERE c.type_name = N'Chùa Khmer'
ORDER BY c.district, p.name;

-- Query 18: Lấy thống kê chùa
SELECT 
    COUNT(DISTINCT p._id) AS total_pagoda,
    COUNT(DISTINCT c._id) AS total_category,
    COUNT(DISTINCT pi._id) AS total_image,
    COUNT(DISTINCT po._id) AS total_post
FROM Pagoda p
CROSS JOIN Category c
LEFT JOIN PagodaImage pi ON p._id = pi.pagoda_id
LEFT JOIN Post po ON 1=1;

-- Query 19: Tìm kiếm chùa
SELECT p._id, p.name, p.description, p.address, c.type_name
FROM Pagoda p
INNER JOIN Category c ON p.category_id = c._id
WHERE p.name LIKE N'%Khmer%' OR p.description LIKE N'%Khmer%';

-- Query 20: Lấy chùa mới nhất
SELECT TOP 5 * FROM Pagoda ORDER BY created_at DESC;
